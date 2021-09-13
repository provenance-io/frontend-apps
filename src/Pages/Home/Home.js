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
const TileIndent = styled.div`
  margin-left: 30px;
  border-left: 2px solid ${({ theme }) => theme.GRAY_DARK };
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
              <Tile data={createWallet} />
          </TileRow>
          <TileRow>
            <TileColumn>
              <Tile data={addPassport} />
              <TileIndent>
                <Tile line data={subscribeToFund} />
                <Tile line data={purchaseStablecoin} />
                <Tile line data={tradeATS} />
                <Tile line data={bridgeBTC} />
                <Tile line data={bridgeETH} />
                <Tile line data={updatePassport} />
              </TileIndent>
            </TileColumn>
            <TileColumn>
              <TileIndent>
                <Tile line data={createNFT} />
                <Tile line data={tokenizeNFT} />
              </TileIndent>
            </TileColumn>
            <TileColumn>
              <TileIndent>
                <Tile line data={purchaseHash} />
                <Tile line data={delegateHash} />
                <Tile line data={transferHash} />
              </TileIndent>
            </TileColumn>
          </TileRow>
        </TileContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
