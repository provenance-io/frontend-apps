import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Sprite from 'Components/Sprite';
import Link from 'Components/Link';
import { useWallet } from 'redux/hooks';
import { breakpoints } from 'consts';

const TileWrapper = styled.div`
  margin: 0 30px;
  height: 282px;
  width: 328px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
  @media ${breakpoints.down('lg')} {
    height: 250px;
    width: 275px;
  }
  @media ${breakpoints.down('md')} {
    height: 200px;
    width: 140px;
  }
`;
const tileBorderAnimation = keyframes`
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
`;
const TileBorder = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top:0;
  left:0;
  padding: 2px;
  animation: ${tileBorderAnimation} 2s linear;
  background: linear-gradient(240deg, rgba(58,74,120,1) 0%, rgba(20,24,33,1) 14%, rgba(62,68,79,1) 29%, rgba(31,34,42,1) 55%, rgba(70,74,84,1) 61%, rgba(20,24,33,1) 72%, rgba(44,48,60,1) 100%);
  animation-direction: alternate;
  animation-fill-mode: both;
  background-size: 200% 200%;
  &:hover, &:focus {
    transition: 2s all;
    background-size: 1300% 1300%;
  }
`;
const TileContent = styled.div`
  height: 100%;
  padding: 20px 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2) inset;
  background: ${({ theme }) => theme.TILE_BACKGROUND };
  transition: 500ms all;
  cursor: pointer;
  position: relative;
  &:hover, &:focus {
    background: ${({ theme }) => theme.TILE_BACKGROUND_LIGHT };
  }
`;
const TileTitle = styled.h3``;
const TileText = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  z-index: 10;
  pointer-events: none;
`;
const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckIcon = styled.div`
  height:15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${({ theme, complete }) => complete ? theme.GREEN_LIGHTEST : theme.GRAY_LIGHT };
  margin-right: 8px;
`;
const SpriteCheck = styled(Sprite)`
  margin-top: 1px;
`;
const TileIcon = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 4px;
  background: ${({ theme }) => theme.GRAY_LIGHT };;
  ${({ complete }) => !complete && `
    filter: grayscale(100%);
    opacity: 0.5;
  `}
`;
const TileImg = styled.img`
  height: 100%;
  width: 100%;
`;
const BottomRow = styled.div`
  display:flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const ArrowContainer = styled.div`
  height: 30px;
  width: 40px;
  overflow: hidden;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
const TileLink = styled(Link)`
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 5;
  top: 0;
  left: 0;
`;

const Tile = ({ className, data }) => {
  const { walletStore } = useWallet();
  const { active, icon, complete, incomplete, requires } = data;
  // Determine is tile is available
  const status = (walletStore && (!requires || !!walletStore[requires])) ? complete : incomplete;
  const { url, content, title } = status;

  return active ? (
    <TileWrapper>
      <TileBorder>
        <TileContent className={className}>
          <TileLink to={url} />
          <TopRow>
            <Status>
              <CheckIcon complete={complete}>
                <SpriteCheck icon="CHECK" size="10px" color="GRAY_DARKER" />
              </CheckIcon>
              {complete ? 'Complete' : 'Incomplete'}
            </Status>
            <TileIcon complete={complete}>
              <TileImg src={`${process.env.PUBLIC_URL}/assets/images/tileIcons/${icon}.svg`} alt={`${title} icon`} />
            </TileIcon>
          </TopRow>
          <TileTitle>{title}</TileTitle>
          <TileText>{content}</TileText>
          <BottomRow>
            <ArrowContainer>
              <Sprite icon="CALL_MADE" spin="45" width="30px" height="40px" color="ICON_PRIMARY" />
            </ArrowContainer>
          </BottomRow>
        </TileContent>
      </TileBorder>
    </TileWrapper>
  ) : null;
};

Tile.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};
Tile.defaultProps = {
  className: '',
};

export default Tile;
