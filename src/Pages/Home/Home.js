import React from 'react';
import styled from 'styled-components';
import base64url from 'base64url';
import { useWalletService, WINDOW_MESSAGES } from '@provenanceio/wallet-lib';
import { Wrapper, Tile, Button } from 'Components';
import { TILE_DATA } from 'consts';
import { useWallet, usePageTitle } from 'redux/hooks';

const HomeContainer = styled.div`
  margin: 0 auto;
`;

const BadgeNotice = styled.div`
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: inline-block;
  padding-left: 10px;
`;
const TileContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`;
const AuthenticateButton = styled(Button)`
  padding: 6px 18px;
  margin-top: 10px;
`;

const Home = () => {
  usePageTitle('Home');
  const walletStore = useWallet();
  const {
    address,
    publicKeyB64,
    walletUrl,
    setJwtToken,
    getWalletKYC,
  } = walletStore;
  const { walletService } = useWalletService(walletUrl);

  let badgesComplete = 0;
  let totalBadges = 0;

  const handleKYCSign = () => {
    // Don't click the badge behind me...
    const expires = Math.floor(Date.now() / 1000) + 9000; // 900s (15min)
    const header = JSON.stringify({alg: 'ES256', typ: 'JWT'});
    const headerEncoded = base64url(header);
    const payload = JSON.stringify({sub: `${publicKeyB64},${address}`, iss: 'provenance.io', iat: expires, exp: expires});
    const payloadEncoded = base64url(payload);
    const jwtEncoded = base64url(`${headerEncoded}.${payloadEncoded}`);
    // Open the wallet and sign the payload
    walletService.sign({payload: jwtEncoded});
    // Create window event listener (once wallet finishes)
    walletService.addEventListener(WINDOW_MESSAGES.SIGNATURE_COMPLETE, ({ message = {} }) => {
      const { signedPayload } = message;
      const fullJWT = `${headerEncoded}.${payloadEncoded}.${signedPayload}`;
      // Save token in store
      setJwtToken(fullJWT);
      // Use the response to send to the wallet
      getWalletKYC({address, fullJWT});
    }, { once: true });
  };


  const buildTiles = TILE_DATA.map(({ complete, incomplete, title, icon, requires, active }) => {
    if (!active) return '';
    totalBadges += 1;
    // Need some way to determine if this current tile is complete or not...
    const isComplete = requires ? !!walletStore[requires] : false;
    if (isComplete) { badgesComplete += 1}
    const { content, url } = isComplete ? complete : incomplete;
    let finalContent = content;
    // This is ugly, so we need to come up with a cleaner way to change certain things like this on tiles.
    // Add a button to authenticate KYC to allow Bridge access
    if ((title === 'BTC Bridge' || title === 'ETH Bridge') && !isComplete) {
      finalContent = (
        <>
          {content}
          <AuthenticateButton onClick={handleKYCSign} title="Click to Authenticate KYC">Authenticate</AuthenticateButton>
        </>
      )
    };

    return (
      <Tile
        complete={isComplete}
        key={title}
        title={title}
        icon={icon}
        url={url}
      >
        {finalContent}
      </Tile>
    );
  });

  return (
    <Wrapper>
      <HomeContainer>
        <BadgeNotice>{badgesComplete}/{totalBadges} Badges Complete</BadgeNotice>
        <TileContainer>
          {buildTiles}
        </TileContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
