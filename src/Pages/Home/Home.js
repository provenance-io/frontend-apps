import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Wrapper, Tile, Sprite } from 'Components';
import { TILE_DATA, PASSPORT_INFO_URL } from 'consts';
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
  const { history } = useHistory();
  const walletStore = useWallet();
  const { address } = walletStore;

  let badgesComplete = 0;
  let totalBadges = 0;

  const buildTiles = TILE_DATA.map(({ complete, incomplete, title, icon, requires, active }) => {
    if (!active) return '';
    totalBadges += 1;
    // Need some way to determine if this current tile is complete or not...
    const isComplete = !!address && (requires ? !!walletStore[requires] : false);
    if (isComplete) { badgesComplete += 1}
    const { content, url } = isComplete ? complete : incomplete;
    let finalContent = content;
    // This is ugly, so we need to come up with a cleaner way to change certain things like this on tiles.
    // Add a button to authenticate KYC to allow Bridge access
    if ((title === 'BTC Bridge' || title === 'ETH Bridge') && !isComplete) {
      finalContent = (
        <>
          {content}
          <Sprite onClick={() => history.push(PASSPORT_INFO_URL)} icon="HELP_OUTLINE" title="Click to Authenticate KYC" size="2rem" />
        </>
      )
    };

    return (
      <Tile
        complete={isComplete}
        key={title}
        title={title}
        icon={icon}
        url={url}
      >
        {finalContent}
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
