import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useWalletService, WINDOW_MESSAGES } from '@provenanceio/wallet-lib';
import { Wrapper, Tile, Button as BaseButton, WalletPreview, PermissionsTest } from 'Components';
import { PROVENANCE_WALLET_URL, FIGURE_WALLET_URL } from 'consts';
import { usePageTitle, useApp, useWallet } from 'redux/hooks';
import { getWalletUrlParams } from 'utils';

const HomeContainer = styled.div`
  flex-grow: 1;
  padding-bottom: 180px;
`;
const TileContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`;
const TileRow = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: 20px;
  background: ${({ theme }) => theme.WHITE };
  margin: 20px 0;
  border-radius: 3px;
  box-shadow: 4px 4px 6px 0px ${({ theme }) => theme.BLACK13 };
`;
const RowTitle = styled.h2`
  font-size: 3.6rem;
  margin: 0;
  padding: 20px 20px 0 20px;
  flex-basis: 100%;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_NORMAL };
  color: ${({ theme }) => theme.GRAY_LIGHT };
`;
const HeaderContent = styled.div``;
const HeaderText = styled.div`
  font-size: 2.1rem;
`;
const ButtonGroup = styled.div`
  display: flex;
  button {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }
`;
const Button = styled(BaseButton)`
  margin: 20px 0 50px 0;
`;

const Home = () => {
  usePageTitle('Home');
  const [connectionStatus, setConnectionStatus] = useState('');
  const { setSectionElements } = useApp();
  const { setWalletLogin, walletUrl, isLoggedIn, setWalletUrl, getPermissions } = useWallet();
  // Get wallet info
  const { walletService } = useWalletService(walletUrl);
  const { address } = walletService?.state;
  const existingWallet = getWalletUrlParams();
  
  // -----------------------------------------------------------------------
  // Create event listener for the user logging in to trigger KYC check
  // -----------------------------------------------------------------------
  walletService.addEventListener(WINDOW_MESSAGES.CONNECTED, walletServiceState => {
    // Update the wallet store
    setWalletLogin(walletServiceState);
    // Make a call to get updated permissions
    getPermissions(address);
  });
  // -------------------------------------------------------------------------------
  // Check for any changes to values in the wallet state and updated as needed
  // -------------------------------------------------------------------------------
  useEffect(() => {
    setWalletLogin(walletService.state);
  }, [walletService.state, setWalletLogin, address, getPermissions]);
  // --------------------------------------------
  // Auto-Connect wallet if query params exist
  // --------------------------------------------
  useEffect(() => {
    if (existingWallet && !isLoggedIn) {
      const { existingWalletType, existingKeychainAccountName, existingAddress } = existingWallet;
      const existingWalletUrl = existingWalletType.toLocaleLowerCase === 'figure' ? FIGURE_WALLET_URL : PROVENANCE_WALLET_URL;
      // Only Provenance Wallet will autoconnect for now
      setWalletUrl(existingWalletUrl);
      walletService.setWalletUrl(existingWalletUrl);
      walletService.initialize({ keychainAccountName: existingKeychainAccountName, address: existingAddress })
    }
  }, [
    existingWallet,
    walletService.initialize,
    isLoggedIn,
    setWalletUrl,
    walletService
  ]);
  // ------------------------------------------------------------
  // Create refs to sections on the page for smooth scrolling
  // ------------------------------------------------------------
  const elWallet = useRef(null);
  const elNFT = useRef(null);
  const elHash = useRef(null);
  const elPassport = useRef(null);
  const elExchange = useRef(null);
  useEffect(() => {
    // Create all the menu locations (smooth scrolling)
    setSectionElements({
      wallet: elWallet,
      nft: elNFT,
      hash: elHash,
      passport: elPassport,
      exchange: elExchange,
    });
  }, [
    setSectionElements,
    elWallet,
    elNFT,
    elHash,
    elPassport,
    elExchange,
  ]);
  // Connect to the wallet api
  const connectWallet = (url) => {
    walletService.setWalletUrl(url || walletUrl);
    walletService.connect();
  };
  // User initially selects "Connect Wallet", determine type of wallet (Fig vs Prov)
  const renderConnectionStatus = () => (
    isLoggedIn ? (
      <WalletPreview />
    ) : connectionStatus ? (
      <HeaderContent>
        <HeaderText>Select the type of wallet to connect</HeaderText>
        <ButtonGroup>
          <Button onClick={()=> connectWallet(FIGURE_WALLET_URL)}>Figure Wallet</Button>
          <Button onClick={()=> connectWallet(PROVENANCE_WALLET_URL)}>Provenance Wallet</Button>
        </ButtonGroup>
      </HeaderContent>
    ) : (
      <HeaderContent>
        <HeaderText>Connect or create a wallet to view the apps you have access to</HeaderText>
        <Button onClick={()=> setConnectionStatus('select')}>Connect Wallet</Button>
      </HeaderContent>
    )
  );

  return (
    <Wrapper>
      <HomeContainer>
        {renderConnectionStatus()}
        { /* TEST ONLY, REMOVE ME | START */}
        <PermissionsTest />
        { /* TEST ONLY, REMOVE ME | END */}
        <TileContainer>
          <TileRow>
            <RowTitle ref={elWallet}>Wallet</RowTitle>
            <Tile tileName='wallet' />
          </TileRow>
          <TileRow>
            <RowTitle ref={elNFT}>NFT</RowTitle>
            <Tile tileName='createNFT' />
            <Tile tileName='tokenizeNFT' />
          </TileRow>
          <TileRow>
            <RowTitle ref={elHash}>Hash</RowTitle>
            <Tile tileName='purchaseHash' />
            <Tile tileName='delegateHash' />
            <Tile tileName='transferHash' />
          </TileRow>
          <TileRow>
            <RowTitle ref={elPassport}>Passport</RowTitle>
            <Tile tileName='passport' />
            <Tile tileName='updatePassport' />
          </TileRow>
          <TileRow>
            <RowTitle ref={elExchange}>Exchange</RowTitle>
            <Tile tileName='subscribeToFund' />
            <Tile tileName='buyDigitalCurrency' />
            <Tile tileName='tradeATS' />
            <Tile tileName='bridgeBTC' />
            <Tile tileName='bridgeETH' />
          </TileRow>
        </TileContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
