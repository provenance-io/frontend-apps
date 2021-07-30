import React from 'react';
import styled from 'styled-components';
import { Wrapper, Tile } from 'Components';
import { TILE_DATA } from 'consts';
import { useWallet, usePageTitle } from 'redux/hooks';

const HomeContainer = styled.div`
  margin: 0 auto;
`;

const BadgeNotice = styled.div`
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: inline-block;
  padding-left: 10px;
`;
const TileContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const Home = () => {
  usePageTitle('Home');
  const walletStore = useWallet();
  const {
    address,
    keychainAccountName,
    walletType,
  } = walletStore;
  
  let badgesComplete = 0;
  let totalBadges = 0;

  const buildTiles = TILE_DATA.map(({ complete, incomplete, title, icon, requires, active }) => {
    if (!active) return '';
    totalBadges += 1;
    // Need some way to determine if this current tile is complete or not...
    const isComplete = requires ? !!walletStore[requires] : false;
    if (isComplete) { badgesComplete += 1}
    const { content, url: baseUrl } = isComplete ? complete : incomplete;
    const url = isComplete ? `${baseUrl}?address=${address}&keychainAccountName=${keychainAccountName}&walletType=${walletType}` : baseUrl;

    return (
      <Tile
        complete={isComplete}
        key={title}
        title={title}
        icon={icon}
        url={url}
      >
        {content}
      </Tile>
    );
  });

  return (
    <Wrapper>
      <HomeContainer>
        <BadgeNotice>{badgesComplete}/{totalBadges} Badges Complete</BadgeNotice>
        <TileContainer>
          {buildTiles}
        </TileContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
