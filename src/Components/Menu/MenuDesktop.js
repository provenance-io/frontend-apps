import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import MenuLine from './MenuLine';
import logo from './logo.svg';

const MenuContainer = styled.div`
  min-width: 400px;
  width: 400px;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100vh;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.24rem;
  box-shadow: 0 4px 50px 20px ${({ theme }) => theme.BLACK95 };
  z-index: 20;
`;
const MenuContent = styled.div`
  width: 415px;
  padding: 50px;
  height: 100%;
  background: ${({ theme }) => theme.MENU_BG };
  padding-bottom: 100px;
  overflow-x: hidden;
  overflow-y: scroll;
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
const LowerCase = styled.span`
  text-transform: lowercase;
`;
const MenuItems = styled.div``;
const MenuSection = styled.div`
  position: relative;
  ${({ indent }) => indent && `margin-left: ${indent}px;` }
`;
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

const MenuDesktop = ({ className }) => (
  <MenuContainer className={className}>
    <MenuContent>
      <MenuHeader>
        <MenuLogo onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}) }}>
          <Logo src={logo} />
          <LogoTitle>Provenance <LowerCase>d</LowerCase>Applications</LogoTitle>
          {process.env.REACT_APP_ENV !== 'production' && (
            <>
              <TestnetMessage>TESTNET</TestnetMessage>
              <Version>v{process.env.REACT_APP_VERSION}</Version>
            </>
          )}
        </MenuLogo>
        <MenuItems>
          <MenuSection>
            <MenuLine length="547" top="20" left="3" direction="down" />
            <SectionTitle>Wallet</SectionTitle>
            <MenuItem tileName="wallet" indent="30" />
          </MenuSection>
          <MenuSection indent="30">
            <MenuLine length="14" top="3" left="-24" direction="left" />
            <SectionTitle>NFT</SectionTitle>
            <MenuItem tileName="createNFT" section="nft" />
            <MenuItem tileName="tokenizeNFT" section="nft" />
          </MenuSection>
          <MenuSection indent="30">
            <MenuLine length="14" top="3" left="-24" direction="left" />
            <SectionTitle>Hash</SectionTitle>
            <MenuItem tileName="purchaseHash" section="hash" />
            <MenuItem tileName="delegateHash" section="hash" />
            <MenuItem tileName="transferHash" section="hash" />
          </MenuSection>
          <MenuSection indent="30">
            <MenuLine length="14" top="3" left="-24" direction="left" />
            <SectionTitle>Document Management</SectionTitle>
            <MenuItem tileName="zorrosign" section="documents" />
          </MenuSection>
          <MenuSection indent="30">
            <MenuLine length="153" top="3" left="-10" />
            <MenuLine length="14" top="3" left="-24" direction="left"  />
            <SectionTitle>Passport</SectionTitle>
            <MenuItem tileName="passport" section="passport" />
            <MenuItem tileName="updatePassport" section="passport" />
          </MenuSection>
          <MenuSection indent="42">
            <MenuLine length="10" top="3" left="-20" direction="left" />
            <SectionTitle>Exchange</SectionTitle>
            <MenuItem tileName="subscribeToFund" section="exchange" />
            <MenuItem tileName="buyDigitalCurrency" section="exchange" />
            <MenuItem tileName="tradeATS" section="exchange" />
            <MenuItem tileName="bridgeBTC" section="exchange" />
            <MenuItem tileName="bridgeETH" section="exchange" />
          </MenuSection>
        </MenuItems>
      </MenuHeader>
    </MenuContent>
  </MenuContainer>
);

MenuDesktop.propTypes = {
  className: PropTypes.string,
};
MenuDesktop.defaultProps = {
  className: '',
};

export default MenuDesktop;
