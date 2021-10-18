import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpoints } from 'consts';
import { default as BaseSprite } from '../Sprite';
import { default as BaseMenuItem } from './MenuItem';
import DropdownList from '../DropdownList';
import MenuLine from './MenuLine';
import logo from './logo.svg';

const MenuContainer = styled.div`
  width: 100%;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.24rem;
`;
const MenuContent = styled.div`
  width: 100%;
  padding: 30px 30px 20px 30px;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.BLACK };
  box-shadow: 0 5px 20px 0px ${({ theme }) => theme.BLACK95 };
  z-index: 20;
  @media ${breakpoints.down('sm')} {
    padding: 30px 15px 20px 15px;
  }
`;
const MenuHeader = styled.div`
`;
const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 30px;
`;
const LogoTitle = styled.h1`
  line-height: 1.4rem;
`;
const LowerCase = styled.span`
  text-transform: lowercase;
`;
const MenuItems = styled.div`
  background: ${({ theme }) => theme.GREY_DARKEST };
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  padding: 30px 15px;
  z-index: 50;
`;
const MenuItem = styled(BaseMenuItem)`
  width: 300px;
`;
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
const Sprite = styled(BaseSprite)`
  position: absolute;
  top: 30px;
  right: 15px;
`;

const MenuTablet = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('wallet');
  
  const toggleMenu = () => {
    const bodyElement = document.getElementsByTagName('body')[0];
    // If the menu is open, add a max-height and overflow hidden to the body (no scrolling past open menu)
    if (menuOpen) { // Close Menu
      bodyElement.style.overflow = '';
      bodyElement.style.maxHeight = '';
      setMenuOpen(false);
    } else { // Open Menu
      bodyElement.style.overflow = 'hidden';
      bodyElement.style.maxHeight = '100%';
      setMenuOpen(true);
    }
  };

  const scrollTo = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      // We need to scroll with an offset since the header floats and blocks content
      const offset = 200;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const scrollPosition = elementPosition - offset;
      window.scrollTo({ behavior: 'smooth', top: scrollPosition });
    }
  };

  const menuItemClick = (section) => {
    toggleMenu();
    setDropdownValue(section);
    scrollTo(section);
  };

  const changeDropdown = ({ target }) => {
    setDropdownValue(target.value);
    scrollTo(target.value);
  };

  return (
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
          <Sprite icon="MENU" size="2rem" color="WHITE" onClick={toggleMenu} />
          <DropdownList value={dropdownValue} onChange={changeDropdown} />
        </MenuHeader>
      </MenuContent>
      {menuOpen && (
        <MenuItems>
          <Sprite icon="CLOSE" onClick={toggleMenu} color="WHITE" size="1.5rem" />
          <MenuSection>
            <MenuLine length="446" top="20" left="3" direction="down" />
            <SectionTitle>Wallet</SectionTitle>
            <MenuItem tileName="wallet" onClick={() => menuItemClick("wallet")} indent="30" />
          </MenuSection>
          <MenuSection indent="30">
            <MenuLine length="14" top="3" left="-24" direction="left" />
            <SectionTitle>NFT</SectionTitle>
            <MenuItem tileName="createNFT" onClick={() => menuItemClick('nft')} />
            <MenuItem tileName="tokenizeNFT" onClick={() => menuItemClick('nft')} />
          </MenuSection>
          <MenuSection indent="30">
            <MenuLine length="14" top="3" left="-24" direction="left" />
            <SectionTitle>Hash</SectionTitle>
            <MenuItem tileName="purchaseHash" onClick={() => menuItemClick('hash')} />
            <MenuItem tileName="delegateHash" onClick={() => menuItemClick('hash')} />
            <MenuItem tileName="transferHash" onClick={() => menuItemClick('hash')} />
          </MenuSection>
          <MenuSection indent="30">
            <MenuLine length="153" top="3" left="-10" />
            <MenuLine length="14" top="3" left="-24" direction="left"  />
            <SectionTitle>Passport</SectionTitle>
            <MenuItem tileName="passport" onClick={() => menuItemClick('passport')} />
            <MenuItem tileName="updatePassport" onClick={() => menuItemClick('passport')} />
          </MenuSection>
          <MenuSection indent="42">
            <MenuLine length="10" top="3" left="-20" direction="left" />
            <SectionTitle>Exchange</SectionTitle>
            <MenuItem tileName="subscribeToFund" onClick={() => menuItemClick('exchange')} />
            <MenuItem tileName="buyDigitalCurrency" onClick={() => menuItemClick('exchange')} />
            <MenuItem tileName="tradeATS" onClick={() => menuItemClick('exchange')} />
            <MenuItem tileName="bridgeBTC" onClick={() => menuItemClick('exchange')} />
            <MenuItem tileName="bridgeETH" onClick={() => menuItemClick('exchange')} />
          </MenuSection>
        </MenuItems>
      )}
    </MenuContainer>
  );
};

MenuTablet.propTypes = {
  className: PropTypes.string,
};
MenuTablet.defaultProps = {
  className: '',
};

export default MenuTablet;
