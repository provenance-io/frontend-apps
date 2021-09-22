import React from 'react';
import styled from 'styled-components';
import { useWalletService } from '@provenanceio/wallet-lib';
import PropTypes from 'prop-types';
import { useWallet } from 'redux/hooks';
import { Sprite, CopyValue } from 'Components';

const WalletPreviewContainer = styled.div`
  font-size: 1.3rem;
  display: inline-block;
  color: ${({ theme }) => theme.FONT_PRIMATY };
`;
const LoginMsg = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 4px 4px 4px;
  justify-content: space-between;
`;
const LoginLink = styled.a`
  font-size: 1.0rem;
  margin-left: 10px;
  cursor: pointer;
`;
const WalletInfo = styled.div`
  display: flex;
  background: ${({ theme }) => theme.WHITE };
  border: 1px solid ${({ theme }) => theme.GRAY_LIGHTER };
  color: ${({ theme }) => theme.FONT_PRIMARY };
  border-radius: 10px;
  align-items: center;
  height: 50px;
`;
const WalletTxt = styled.div`
  padding: 10px 20px;
  line-height: 1rem;
  height: 100%;
  display: flex;
  justify-content: center;
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
  background: ${({ theme }) => theme.BLUE_PRIMARY };
  border-radius: 8px 0 0 8px;
  height: 100%;
  display: flex;
  padding: 10px 16px;
`;

const WalletPreview = ({ className }) => {
  const {
    address,
    walletUrl,
    setWalletLogout,
    walletIcon,
    keychainAccountName,
  } = useWallet();
  const { walletService } = useWalletService(walletUrl);

  const handleSignout = () => {
    setWalletLogout();
    walletService.disconnect();
    walletService.updateState();
  };

  return (
    <WalletPreviewContainer className={className}>
      <LoginMsg>
        <div>Wallet connected:</div>
        <LoginLink onClick={handleSignout}>(Sign Out)</LoginLink>
      </LoginMsg>
      <WalletInfo>
        {walletIcon && <SpriteSection><Sprite size="30px" color="WHITE" icon={walletIcon} /></SpriteSection>}
        <WalletTxt>
          {keychainAccountName && <WalletName>{keychainAccountName}</WalletName>}
          <WalletAddressContainer>
            <WalletAddress>{address}</WalletAddress>
            <CopyValue value={address} iconColor="BLUE_PRIMARY" size="1.2rem" />
          </WalletAddressContainer>
        </WalletTxt>
      </WalletInfo>
    </WalletPreviewContainer>
  );
};

WalletPreview.propTypes = {
  className: PropTypes.string,
};
WalletPreview.defaultProps = {
  className: '',
};

export default WalletPreview;
