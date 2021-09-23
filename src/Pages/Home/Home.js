import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useWalletService, WINDOW_MESSAGES } from '@provenanceio/wallet-lib';
import { Wrapper, Tile, Button as BaseButton, WalletPreview, PermissionsTest } from 'Components';
import { PROVENANCE_WALLET_URL, FIGURE_WALLET_URL } from 'consts';
import { usePageTitle, useWallet } from 'redux/hooks';
import { getFromSessionStorage, getWalletUrlParams } from 'utils';

const HomeContainer = styled.div`
  flex-grow: 1;
  padding-bottom: 180px;
`;
const TileContainer = styled.div``;
const TileRow = styled.div``;
const TileRowContent = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  margin: 20px 0;
`;
const RowTitle = styled.h2`
  font-size: 1.8rem;
  padding-bottom: 8px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.BORDER_PRIMARY };
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
  const [permissionsChecked, setPermissionsChecked] = useState(false);
  const {
    setWalletLogin,
    walletUrl,
    isLoggedIn,
    setWalletUrl,
    getPermissions,
    permissionsLoading,
    walletType: storeWalletType,
    address: storeAddress,
    keychainAccountName: storeKeychainAccountName,
  } = useWallet();
  // Get wallet info
  const { walletService } = useWalletService(walletUrl);
  const { address } = walletService?.state;
  const existingWallet = getWalletUrlParams();
  // ----------------------------------------------------------------
  // Wallet has logged in (one way or another), check permissions
  // ----------------------------------------------------------------
  useEffect(() => {
    if (isLoggedIn && address && !permissionsLoading && !permissionsChecked) {
      setPermissionsChecked(true);
      getPermissions(address);
    }
  }, [isLoggedIn, address, permissionsLoading, getPermissions, permissionsChecked]);
  // -----------------------------------------------------------------------
  // Create event listener for the user logging in to trigger KYC check
  // -----------------------------------------------------------------------
  walletService.addEventListener(WINDOW_MESSAGES.CONNECTED, walletServiceState => {
    // Update the wallet store
    setWalletLogin(walletServiceState);
  });
  // -------------------------------------------------------
  // Auto-Connect wallet if session storage wallet exists
  // -------------------------------------------------------
  useEffect(() => {
    const {
      address: sessionAddress,
      walletType: sessionWalletType,
      keychainAccountName: sessionKeychainAccountName,
     } = getFromSessionStorage(['address', 'walletType', 'keychainAccountName'])
    const newAddress = sessionAddress && sessionAddress !== storeAddress;
    const newWalletType = sessionWalletType && sessionWalletType !== storeWalletType;
    const newKeychainAccountName = sessionKeychainAccountName && sessionKeychainAccountName !== storeKeychainAccountName;
    // Only run if main values have changed
    if (newAddress || newWalletType || newKeychainAccountName) {
      setWalletLogin({
        address: sessionAddress,
        walletType: sessionWalletType,
        keychainAccountName: sessionKeychainAccountName,
      });
    }
  }, [
    setWalletLogin,
    storeAddress,
    storeWalletType,
    storeKeychainAccountName,
  ]);
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
    walletService,
    getPermissions,
  ]);
  // Connect to the wallet api
  const connectWallet = (url) => {
    walletService.setWalletUrl(url);
    walletService.connect(url);
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
            <TileRowContent>
              <RowTitle id="wallet">Wallet</RowTitle>
              <Tile tileName='wallet' />
            </TileRowContent>
          </TileRow>
          <TileRow>
            <TileRowContent>
              <RowTitle id="nft">NFT</RowTitle>
              <Tile tileName='createNFT' />
              <Tile tileName='tokenizeNFT' />
            </TileRowContent>
          </TileRow>
          <TileRow>
            <TileRowContent>
              <RowTitle id="hash">Hash</RowTitle>
              <Tile tileName='purchaseHash' />
              <Tile tileName='delegateHash' />
              <Tile tileName='transferHash' />
            </TileRowContent>
          </TileRow>
          <TileRow>
            <TileRowContent>
              <RowTitle id="passport">Passport</RowTitle>
              <Tile tileName='passport' />
              <Tile tileName='updatePassport' />
            </TileRowContent>
          </TileRow>
          <TileRow>
            <TileRowContent>
              <RowTitle id="exchange">Exchange</RowTitle>
              <Tile tileName='subscribeToFund' />
              <Tile tileName='buyDigitalCurrency' />
              <Tile tileName='tradeATS' />
              <Tile tileName='bridgeBTC' />
              <Tile tileName='bridgeETH' />
            </TileRowContent>
          </TileRow>
        </TileContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
