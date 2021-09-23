import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import logo from './logo.svg';

const MenuContainer = styled.div`
  min-width: 400px;
  width: 400px;
  overflow: hidden;
  height: 100%;
  min-height: 100vh;
  margin-right: 30px;
  position: relative;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.24rem;
  box-shadow: 0 4px 54px 0 ${({ theme }) => theme.BLACK95 };
`;
const MenuContent = styled.div`
  width: 400px;
  max-height: 100%;
  overflow-y: scroll;
  padding: 50px;
  height: 100%;
  position: fixed;
  background: ${({ theme }) => theme.MENU_BG };
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
  margin-bottom: 40px;
`;
const LogoTitle = styled.h1`
  line-height: 1.4rem;
`;
const MenuItems = styled.div``;
const MenuSection = styled.div``;
const SectionTitle = styled.h4`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_NORMAL };
  margin-bottom: 20px;
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
  letter-spacing: 0.5rem;
  /* font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD }; */
  animation: ${spaceout} 1s linear infinite;
  animation-direction: alternate-reverse;
  position: absolute;
  opacity: 0.3;
  top: 45px;
  left: 82px;
`;
const Version = styled.div`
  position: absolute;
  text-transform: lowercase;
  opacity: 0.3;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  left: 164px;
  top: 45px;
  z-index: 10;
`;
const Logo = styled.img`
  height: 62px;
  width: 62px;
  margin-right: 20px;
`;

const Menu = ({ className }) => (
  <MenuContainer className={className}>
    <MenuContent>
      <MenuHeader>
        <MenuLogo onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}) }}>
          <Logo src={logo} />
          <LogoTitle>Provenance Applications</LogoTitle>
          {process.env.REACT_APP_ENV !== 'production' && <TestnetMessage>TESTNET</TestnetMessage>}
          <Version>v{process.env.REACT_APP_VERSION}</Version>
        </MenuLogo>
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
