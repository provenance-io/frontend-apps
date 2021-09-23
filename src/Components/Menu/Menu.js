import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Sprite } from 'Components';
import MenuItem from './MenuItem';

const MenuContainer = styled.div`
  min-width: 270px;
  width: 270px;
  height: 100%;
  min-height: 100vh;
  margin-right: 30px;
  position: relative;
`;
const MenuContent = styled.div`
  width: 270px;
  max-height: 100%;
  overflow-y: scroll;
  padding: 30px 30px 80px 30px;
  height: 100%;
  position: fixed;
  background: ${({ theme }) => theme.WHITE };
  left: 0;
  top: 0;
`;
const MenuHeader = styled.div`
  margin-bottom: 20px;
`;
const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const LogoTitle = styled.p`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_THIN };
  text-transform: uppercase;
`;
const MenuTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 50px 0;
`;
const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin-right: 10px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.BLUE_PRIMARY };
`;
const MenuItems = styled.div``;
const MenuSection = styled.div``;
const SectionTitle = styled.h4`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_NORMAL };
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
  letter-spacing: 0.27rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  animation: ${spaceout} 1s linear infinite;
  animation-direction: alternate-reverse;
  position: absolute;
  color: ${({ theme }) => theme.GRAY_LIGHTER };
  top: 26px;
  left: 64px;
`;
const Version = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.GRAY_LIGHTER };
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_NORMAL };
  font-size: 1.0rem;
  letter-spacing: 0.1rem;
  left: 60px;
  top: 56px;
  z-index: 10;
  padding: 4px 0;
`;

const Menu = ({ className }) => (
  <MenuContainer className={className}>
    <MenuContent>
      <MenuHeader>
        <MenuLogo onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}) }}>
          {process.env.REACT_APP_ENV !== 'production' && <TestnetMessage>TESTNET</TestnetMessage>}
          <IconContainer>
            <Sprite icon="LOGO" color="WHITE" />
          </IconContainer>
          <LogoTitle>Apps</LogoTitle>
          <Version>v{process.env.REACT_APP_VERSION}</Version>
        </MenuLogo>
        <MenuTitle>Provenance Applications</MenuTitle>
        <MenuItems>
          <MenuSection>
            <SectionTitle>Wallet</SectionTitle>
            <MenuItem title="Create a Wallet" section="wallet" />
          </MenuSection>
          <MenuSection>
            <SectionTitle>NFT</SectionTitle>
            <MenuItem title="Create an NFT" section="nft" />
            <MenuItem title="Tokenize an NFT" section="nft" />
          </MenuSection>
          <MenuSection>
            <SectionTitle>Hash</SectionTitle>
            <MenuItem title="Purchase Hash" section="hash" />
            <MenuItem title="Delegate Hash" section="hash" />
            <MenuItem title="Transfer Hash" section="hash" />
          </MenuSection>
          <MenuSection>
            <SectionTitle>Passport</SectionTitle>
            <MenuItem title="Add a Passport" section="passport" />
            <MenuItem title="Upgrade Passport" section="passport" />
          </MenuSection>
          <MenuSection>
            <SectionTitle>Exchange</SectionTitle>
            <MenuItem title="Subscribe to a Fund" section="exchange" />
            <MenuItem title="Buy Digital Currency" section="exchange" />
            <MenuItem title="Trade on ATS" section="exchange" />
            <MenuItem title="Access BTC Bridge" section="exchange" />
            <MenuItem title="Access ETH Bridge" section="exchange" />
          </MenuSection>
        </MenuItems>
      </MenuHeader>
    </MenuContent>
  </MenuContainer>
);

Menu.propTypes = {
  className: PropTypes.string,
};
Menu.defaultProps = {
  className: '',
};

export default Menu;
