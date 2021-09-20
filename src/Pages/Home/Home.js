import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper, Tile } from 'Components';
import {
  createWallet,
  addPassport,
  bridgeBTC,
  bridgeETH,
  createNFT,
  delegateHash,
  purchaseHash,
  purchaseStablecoin,
  subscribeToFund,
  tokenizeNFT,
  tradeATS,
  transferHash,
  updatePassport
} from 'consts';
import { usePageTitle } from 'redux/hooks';
import useApp from 'redux/hooks/useApp';

const HomeContainer = styled.div`
  margin: 0 auto;
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
  margin-bottom: 50px;
`;
const TestPermissions = styled.div`
  position: fixed;
  top:80px;
  right: 0;
  background: grey;
  padding: 10px;
  display: flex;
`;

const Home = () => {
  usePageTitle('Home');
  const [permissionName, setPermissionName] = useState();
  const { addPermissions, removePermissions } = useApp();

  return (
    <Wrapper>
      <HomeContainer>
        <HeaderText>Link your Provenance Wallet to view the apps you can use</HeaderText>
        { /* TEST ONLY, REMOVE ME | START */}
        <TestPermissions>
          <input placeholder="Enter Permission Name" onChange={({ target }) => setPermissionName(target.value)}/>
          <button onClick={() => removePermissions(permissionName)}>Remove</button>
          <button onClick={() => addPermissions(permissionName)}>Add</button>
        </TestPermissions>
        { /* TEST ONLY, REMOVE ME | END */}
        <TileContainer>
          <TileRow>
              <RowTitle>Wallet</RowTitle>
              <Tile color="BLUE" data={createWallet} />
          </TileRow>
          <TileRow>
            <RowTitle>NFT</RowTitle>
            <Tile color="ORANGE" data={createNFT} />
            <Tile color="ORANGE" data={tokenizeNFT} />
          </TileRow>
          <TileRow>
            <RowTitle>Hash</RowTitle>
            <Tile color="GREEN" data={purchaseHash} />
            <Tile color="GREEN" data={delegateHash} />
            <Tile color="GREEN" data={transferHash} />
          </TileRow>
          <TileRow>
            <RowTitle>Passport</RowTitle>
            <Tile color="TEAL" data={addPassport} />
            <Tile color="TEAL" data={updatePassport} />
          </TileRow>
          <TileRow>
            <RowTitle>Exchange</RowTitle>
            <Tile color="PURPLE" data={subscribeToFund} />
            <Tile color="PURPLE" data={purchaseStablecoin} />
            <Tile color="PURPLE" data={tradeATS} />
            <Tile color="PURPLE" data={bridgeBTC} />
            <Tile color="PURPLE" data={bridgeETH} />
          </TileRow>
        </TileContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
