import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useWalletService, WINDOW_MESSAGES } from '@provenanceio/wallet-lib';
import { useWallet } from 'redux/hooks';
import { Button, WalletPreview } from 'Components';
import { FIGURE_WALLET_URL, PROVENANCE_WALLET_URL } from 'consts';

const WalletStatusContainer = styled.div``;
const HeaderContent = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px;
`;
const HeaderText = styled.div`
  font-size: 1.2rem;
  ${({ full }) => full && 'width: 100%;' }
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  text-transform: uppercase;
  letter-spacing: 0.24rem;
  line-height: 1.7rem;
  margin-right: 14px;
  margin-bottom: 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  button {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }
`;

const WalletStatus = ({ className }) => {
  const [connectionStatus, setConnectionStatus] = useState('');
  const { isLoggedIn, walletUrl, setWalletLogin } = useWallet();
  const { walletService } = useWalletService(walletUrl);

  // ------------------------------------------------
  // Create event listener for the user logging in 
  // ------------------------------------------------
  walletService.addEventListener(WINDOW_MESSAGES.CONNECTED, walletServiceState => {
    // Update the wallet store
    setWalletLogin(walletServiceState);
  });

  // Connect to the wallet api
  const connectWallet = (url) => {
    walletService.setWalletUrl(url);
    walletService.connect(url);
  };

  return (
    <WalletStatusContainer className={className}>
      {isLoggedIn ? (
        <WalletPreview />
      ) : connectionStatus ? (
        <HeaderContent>
          <HeaderText>Select the type of wallet to connect</HeaderText>
          <ButtonGroup>
            <Button icon="FIGURE" onClick={()=> connectWallet(FIGURE_WALLET_URL)}>Figure Wallet</Button>
            <Button icon="LOGO" onClick={()=> connectWallet(PROVENANCE_WALLET_URL)}>Provenance Wallet</Button>
          </ButtonGroup>
        </HeaderContent>
      ) : (
        <HeaderContent>
          <HeaderText full>Connect or create a wallet to view the apps you have access to</HeaderText>
          <Button onClick={()=> setConnectionStatus('select')}>Connect Wallet</Button>
        </HeaderContent>
      )}
    </WalletStatusContainer>
  );
};

WalletStatus.propTypes = {
  className: PropTypes.string,
};
WalletStatus.defaultProps = {
  className: '',
};

export default WalletStatus;
