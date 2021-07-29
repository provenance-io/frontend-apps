import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as BaseLink, useLocation } from 'react-router-dom';
import { useWalletService } from '@provenanceio/wallet-lib';
import { useWallet } from 'redux/hooks';
import { CopyValue, Sprite, Button } from 'Components';
import { PROVENANCE_WALLET_URL } from 'consts';

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 63px;
  padding: 16px 10%;
  background: ${({ theme }) => theme.HEADER_BACKGROUND};
  color: ${({ theme }) => theme.HEADER_FONT };
  z-index: 200;
`;
const LogoLink = styled(BaseLink)`
  display: flex;
  align-items: center;
  position: relative;
`;
const LogoText = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.FONT_WHITE };
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  text-transform: uppercase;
  letter-spacing: 1.2rem;
  margin-left: 10px;
  margin-bottom: 4px;
`;
const LoginStatus = styled.div`
  display: flex;
  align-items: center;
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
  border: 2px solid ${({ theme }) => theme.TILE_BACKGROUND };
  color: ${({ theme }) => theme.FONT_PRIMARY };
  border-radius: 10px;
  align-items: center;
  height: 52px;
`;
const WalletTxt = styled.div`
  padding: 10px 20px;
  line-height: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const WalletName = styled.div`
  flex-basis: 100%;
`;
const WalletAddressContainer = styled.div`
  display: flex;
  align-items: center;
`;
const WalletAddress = styled.div`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  margin-right: 4px;
`;
const SpriteSection = styled.div`
  background: ${({ theme }) => theme.TILE_BACKGROUND_LIGHT };
  border-radius: 8px 0 0 8px;
  height: 100%;
  display: flex;
  padding: 10px 16px;
`;
const spaceout = keyframes`
  from {
    transform: rotate(-5deg);
  }
  to {
    transform: rotate(5deg);
  }
`;
const TestnetMessage = styled.div`
  font-size: 1rem;
  letter-spacing: .47rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  animation: ${spaceout} 1s linear infinite;
  animation-direction: alternate-reverse;
  position: absolute;
  color: ${({ theme }) => theme.FONT_WHITE };
  bottom: 0px;
  left: 42px;
  opacity: 0.5;
`;

const Navigation = () => {
  const {
    isLoggedIn,
    setWalletUrl,
    setWalletLogin,
    setWalletLogout,
    walletUrl,
  } = useWallet();

  // Get URL Query Parameters
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const existingKeychainAccountName = query.get('keychainAccountName');
  const existingAddress = query.get('address');
  const existingWallet = existingAddress && existingKeychainAccountName;
  // Initiate the walletService
  const { walletService } = useWalletService(walletUrl);
  const { address, walletType, keychainAccountName } = walletService?.state;
  // Determine wallet icon to show next to wallet info
  const walletIcon = (walletType && walletType === 'PROVENANCE' && 'LOGO') || (walletType && walletType === 'FIGURE' && 'FIGURE')

  // -------------------------------------------------------------------------------
  // Check for any changes to values in the wallet state and updated as needed
  // -------------------------------------------------------------------------------
  useEffect(() => {
    setWalletLogin(walletService.state);
  }, [walletService.state, setWalletLogin]);

  // --------------------------------------------
  // Auto-Connect wallet if query params exist
  // --------------------------------------------
  useEffect(() => {
    if (existingWallet && !isLoggedIn) {
      // Only Provenance Wallet will autoconnect for now
      setWalletUrl(PROVENANCE_WALLET_URL);
      walletService.setWalletUrl(PROVENANCE_WALLET_URL);
      walletService.initialize({keychainAccountName: existingKeychainAccountName, address: existingAddress})
    }
  }, [
    existingWallet,
    walletService.initialize,
    isLoggedIn,
    existingKeychainAccountName,
    existingAddress,
    setWalletUrl,
    walletService
  ]);

  const handleSignout = () => {
    setWalletLogout();
    walletService.disconnect();
    walletService.updateState();
  };

  return (
    <HeaderWrapper>
      <LogoLink to='/' title="Provenance Applications">
        <Sprite icon="LOGO" height="32px" width="32px" />
        <LogoText>Apps</LogoText>
        {process.env.REACT_APP_ENV !== 'production' && <TestnetMessage>TESTNET</TestnetMessage>}
      </LogoLink>
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
                <CopyValue value={address} iconColor="ICON_SECONDARY" size="1.2rem" />
              </WalletAddressContainer>
            </WalletTxt>
          </WalletInfo>
        </LoginStatus>
      :
        <LoginStatus>
          <Button
            onClick={() => {
              walletService.setWalletUrl(PROVENANCE_WALLET_URL);
              walletService.connect();
            }}
          >
            Link Provenance Wallet
          </Button>
        </LoginStatus>
      }
    </HeaderWrapper>
  );
};

export default Navigation;
