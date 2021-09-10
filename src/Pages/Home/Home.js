import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper, Tile, LineSpacer } from 'Components';
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
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
const TileColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const HeaderText = styled.div`
  font-size: 2.1rem;
  margin-bottom: 50px;
  text-align: center;
`;
const TestPermissions = styled.div`
  position: fixed;
  top:80px;
  left: 0;
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
              <LineSpacer horizontal position="right" />
              <Tile data={createWallet} />
              <LineSpacer horizontal position="left" />
          </TileRow>
          <TileRow>
            <TileColumn>
              <LineSpacer />
              <Tile data={addPassport} />
              <LineSpacer />
              <Tile data={subscribeToFund} />
              <LineSpacer />
              <Tile data={purchaseStablecoin} />
              <LineSpacer />
              <Tile data={tradeATS} />
              <LineSpacer />
              <Tile data={bridgeBTC} />
              <LineSpacer />
              <Tile data={bridgeETH} />
              <LineSpacer />
              <Tile data={updatePassport} />
            </TileColumn>
            <TileColumn>
              <LineSpacer />
              <Tile data={createNFT} />
              <LineSpacer />
              <Tile data={tokenizeNFT} />
            </TileColumn>
            <TileColumn>
              <LineSpacer />
              <Tile data={purchaseHash} />
              <LineSpacer />
              <Tile data={delegateHash} />
              <LineSpacer />
              <Tile data={transferHash} />
            </TileColumn>
          </TileRow>
        </TileContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
