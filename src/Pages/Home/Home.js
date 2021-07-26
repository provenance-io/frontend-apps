import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWalletService } from '@provenanceio/wallet-lib';
import { Button, Wrapper, Tile, Sprite, CopyValue} from 'Components';
import { SAMPLE_DATA } from 'consts';
import { useWallet } from 'redux/hooks';

const Callout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 53px;
  padding: 0 10px;
`;
const CalloutText = styled.h2`
  max-width: 400px;
  font-size: 2.0rem;
  line-height: 3rem;
  font-weight: 900;
`;
const BadgeNotice = styled.div`
  font-size: 1.4rem;
  margin-bottom: 20px;
  padding: 0 10px;
`;
const TileContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`;
const LoginStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2rem;
`;
const LoginMsg = styled.div`
  margin-right: 10px;
  text-align: right;
`;
const LoginLink = styled.a`
  font-size: 1.0rem;
  margin-left: 10px;
  cursor: pointer;
`;
const WalletInfo = styled.div`
  display: flex;
  background: ${({ theme }) => theme.TILE_BACKGROUND };
  box-shadow: 0 0 0 1px ${({ theme }) => theme.TILE_BACKGROUND_LIGHT } inset;
  color: ${({ theme }) => theme.FONT_PRIMARY };
  border-radius: 10px;
  align-items: center;
  height: 52px;
  overflow:hidden;
`;
const WalletTxt = styled.div`
  padding: 10px 20px;
  line-height: 1rem;
`;
const WalletName = styled.div``;
const WalletAddressContainer = styled.div`
  display: flex;
  align-items: center;
`;
const WalletAddress = styled.div`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };  
`;
const SpriteSection = styled.div`
  background: ${({ theme }) => theme.TILE_BACKGROUND_LIGHT };
  height: 100%;
  display: flex;
  border-radius: 10px 0 0 10px;
  padding: 10px 16px;
`;

const Home = () => {
  const buildTiles = SAMPLE_DATA.map(({ title, content, complete }) => (
    <Tile complete={complete} title={title} key={title}>{content}</Tile>
  ));
  const totalBadges = SAMPLE_DATA.length;
  const badgesComplete = SAMPLE_DATA.filter(({ complete }) => complete).length;

  const { isLoggedIn, walletUrl, setWalletLogout, setWalletLogin, walletIcon } = useWallet();
  const { walletService = {} } = useWalletService();
  const { address, keychainAccountName, walletType } = walletService?.state;

  // Check for any changes to values in the wallet state and updated as needed
  useEffect(() => {
    setWalletLogin({ address, keychainAccountName, walletType });
  }, [address, keychainAccountName, walletType, setWalletLogin]);

  const handleConnect = () => {
    walletService.setWalletUrl(walletUrl);
    walletService.connect();
  };
  const handleSignout = () => {
    setWalletLogout();
    walletService.disconnect();
    walletService.updateState();
  };

  return (
    <Wrapper>
      {isLoggedIn ?
        <LoginStatus>
          <LoginMsg>
            <div>Logged in as</div>
            <LoginLink onClick={handleSignout}>(Sign Out)</LoginLink>
          </LoginMsg>
          <WalletInfo>
            {walletIcon && <SpriteSection><Sprite size="30px" icon={walletIcon} /></SpriteSection>}
            <WalletTxt>
              {keychainAccountName && <WalletName>{keychainAccountName}</WalletName>}
              <WalletAddressContainer>
                <WalletAddress>{address}</WalletAddress>
                <CopyValue value={address} iconColor="ICON_SECONDARY" size="2.2rem" />
              </WalletAddressContainer>
            </WalletTxt>
          </WalletInfo>
        </LoginStatus>
      :
        <LoginStatus>
          <Callout>
            <CalloutText>Link your Provenance Wallet to view the badges you have received</CalloutText>
            <Button onClick={handleConnect}>Link Provenance Wallet</Button>
          </Callout>
        </LoginStatus>
      }
      <BadgeNotice>{badgesComplete}/{totalBadges} Badges Complete</BadgeNotice>
      <TileContainer>
        {buildTiles}
      </TileContainer>
    </Wrapper>
  );
};

export default Home;
