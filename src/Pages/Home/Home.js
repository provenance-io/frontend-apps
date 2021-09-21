import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper, Tile, Button as BaseButton } from 'Components';
import { usePageTitle } from 'redux/hooks';
import useApp from 'redux/hooks/useApp';

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
const HeaderText = styled.div`
  font-size: 2.1rem;
`;
const TestPermissions = styled.div`
  position: fixed;
  top:0;
  right: 0;
  width: 200px;
  background: ${({ theme }) => theme.BLUE_PRIMARY };
  padding: 12px 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0 0 0 5px;
  opacity: 0.25;
  transition: 500ms all;
  &:hover, &:active, &:focus {
    opacity: 1;
  }
  input {
    padding: 8px 10px;
    border: none;
    border-radius: 5px 0 0 5px;
    width: 128px;
    height: 20px;
    outline: none;
  }
  button {
    border: none;
    background: ${({ theme }) => theme.TILE_PURPLE_C };
    color: ${({ theme }) => theme.WHITE };
    padding: 0 5px;
    height: 20px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
`;
const PermissionWrapper = styled.div`
  flex-basis: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.WHITE };
`;
const ClosePermission = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;
const Permission = styled.div``;
const Button = styled(BaseButton)`
  margin: 20px 0 50px 0;
`;

const Home = () => {
  usePageTitle('Home');
  const [permissionName, setPermissionName] = useState('');
  const { addPermissions, removePermissions, setSectionElements, appPermissions } = useApp();
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

  return (
    <Wrapper>
      <HomeContainer>
        <HeaderText>Connect or create a Provenance Wallet to view the apps you can use</HeaderText>
        <Button>Connect Wallet</Button>
        { /* TEST ONLY, REMOVE ME | START */}
        <TestPermissions>
          <input placeholder="Debug Permissions" value={permissionName} onChange={({ target }) => setPermissionName(target.value)}/>
          <button onClick={() => { (permissionName && addPermissions(permissionName)); setPermissionName('');}}>Add</button>
          {appPermissions.map(permission => (
            <PermissionWrapper key={permission}>
              <ClosePermission onClick={() => {removePermissions(permission); setPermissionName('');}}>✖</ClosePermission>
              <Permission>{permission}</Permission>
            </PermissionWrapper>
          ))}
        </TestPermissions>
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
