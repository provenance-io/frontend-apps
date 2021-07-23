import React from 'react';
import styled from 'styled-components';
import { Button, Wrapper, Tile } from 'Components';
import { SAMPLE_DATA } from 'consts';

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

const Home = () => {
  const buildTiles = SAMPLE_DATA.map(({ title, content, complete }) => (
    <Tile complete={complete} title={title} key={title}>{content}</Tile>
  ));
  const totalBadges = SAMPLE_DATA.length;
  const badgesComplete = SAMPLE_DATA.filter(({ complete }) => complete).length;

  return (
    <Wrapper>
      <Callout>
        <CalloutText>Link your Provenance Wallet to view the badges you have received</CalloutText>
        <Button>Link Provenance Wallet</Button>
      </Callout>
      <BadgeNotice>{badgesComplete}/{totalBadges} Badges Complete</BadgeNotice>
      <TileContainer>
        {buildTiles}
      </TileContainer>
    </Wrapper>
  );
};

export default Home;
