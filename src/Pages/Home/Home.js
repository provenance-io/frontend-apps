import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWalletService } from '@provenanceio/wallet-lib';
import { Wrapper, Tile, WalletStatus } from 'Components';
import { PROVENANCE_WALLET_URL, FIGURE_WALLET_URL, breakpoints } from 'consts';
import { usePageTitle, useWallet } from 'redux/hooks';
import { getFromSessionStorage, getWalletUrlParams } from 'utils';
import rayBG from './rayBG.jpg';

const HomeContainer = styled.div`
  flex-grow: 1;
  padding: 90px 0 180px 480px;
  background-image: url(${rayBG});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.GREY_DARKEST };
  @media ${breakpoints.down('md')} {
    padding: 190px 20px;
    background-color: ${({ theme }) => theme.BLACK };
    background-image: none;
  }
  @media ${breakpoints.down('sm')} {
    padding: 190px 5px;
  }
`;
const TileContainer = styled.div``;
const TileRow = styled.div`
  margin-bottom: 40px;
`;
const TileRowContent = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: stretch;
  justify-items: stretch;
  flex-wrap: wrap;
  margin: 20px 0;
`;
const RowTitle = styled.h2`
  font-size: 1.8rem;
  padding-bottom: 8px;
  margin-bottom: 20px;
  margin-left: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.BORDER_PRIMARY };
  flex-basis: 100%;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  color: ${({ theme }) => theme.GRAY_LIGHT };
`;

const Home = () => {
  usePageTitle('Home');
  const {
    setWalletLogin,
    walletUrl,
    isLoggedIn,
    setWalletUrl,
    getPermissions,
    walletType: storeWalletType,
    address: storeAddress,
    keychainAccountName: storeKeychainAccountName,
  } = useWallet();
  // Get wallet info
  const { walletService } = useWalletService(walletUrl);
  const { address } = walletService?.state;
  const existingWallet = getWalletUrlParams();
  // ----------------------------------------------------------------
  // Wallet has logged in/out (one way or another), check permissions
  // ----------------------------------------------------------------
  useEffect(() => {
    if (isLoggedIn && (address || storeAddress)) {
      getPermissions(address || storeAddress);
    }
  }, [isLoggedIn, address, storeAddress, getPermissions]);
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

  return (
    <Wrapper>
      <HomeContainer>
        <WalletStatus />
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
              <Tile tileName='tradeATS' />
              <Tile tileName='buyDigitalCurrency' />
              <Tile tileName='bridgeBTC' />
              <Tile tileName='bridgeETH' />
            </TileRowContent>
          </TileRow>
          <TileRow>
            <TileRowContent>
              <RowTitle id="documents">Document Management</RowTitle>
              <Tile tileName='zorrosign'/>
            </TileRowContent>
          </TileRow>
        </TileContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
