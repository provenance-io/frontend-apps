import React from 'react';
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

const Home = () => {
  usePageTitle('Home');

  return (
    <Wrapper>
      <HomeContainer>
        <TileContainer>
          <TileRow>
            <TileColumn>
              <Tile data={createWallet} />
            </TileColumn>
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
