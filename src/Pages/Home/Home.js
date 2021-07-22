import React from 'react';
import styled from 'styled-components';
import { Button, Wrapper, Tile } from 'Components';

const Callout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 53px;
  padding: 0 10px;
`;
const CalloutText = styled.h2`
  max-width: 400px;
  font-size: 2.0rem;
  line-height: 3rem;
  font-weight: 900;
`;
const BadgeNotice = styled.div`
  font-size: 1.4rem;
  margin-bottom: 20px;
  padding: 0 10px;
`;
const TileContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const Home = () => (
  <Wrapper>
    <Callout>
      <CalloutText>Link your Provenance Wallet to view the badges you have received</CalloutText>
      <Button>Link Provenance Wallet</Button>
    </Callout>
    <BadgeNotice>0/14 Badges Complete</BadgeNotice>
    <TileContainer>
      <Tile complete={true} icon="WALLET" title="Create a Wallet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="PASSPORT" title="Add a Passport">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={true} icon="STABLECOIN" title="Purchase Stablecoin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="DELEGATED" title="Delegated Token">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="HASHTRANSFER" title="Transferred Hash">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={true} icon="CASTLE" title="Subscribe to a fund">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="ICON" title="Upgrade Passport">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="ICON" title="Trade on ATS">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="ICON" title="Create a NFT">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="ICON" title="Tokenize a NFT">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="ICON" title="Create a coin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="ICON" title="BTC Bridge">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
      <Tile complete={false} icon="ICON" title="ETH Bridge">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.
      </Tile>
    </TileContainer>
  </Wrapper>
);

export default Home;
