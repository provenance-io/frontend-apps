import React from 'react';
import styled from 'styled-components';
import { Wrapper, Tile, Sprite as BaseSprite, Link as BaseLink } from 'Components';
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
const Link = styled(BaseLink)`
  display: inline-flex;
  margin-top: 10px;
  pointer-events: all;
`;
const Sprite = styled(BaseSprite)`
  margin-right: 6px;
`;

const Home = () => {
  usePageTitle('Home');
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
          <Link to={PASSPORT_INFO_URL} title="Passport Information and Details">
            <Sprite icon="HELP_OUTLINE" size="2rem" />
            Details
          </Link>
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
