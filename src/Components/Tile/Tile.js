import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Sprite from 'Components/Sprite';
import { TILE_ICONS } from 'consts';

const TileWrapper = styled.div`
  margin: 10px;
  height: 272px;
  width: 328px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
`;
const tileBorderAnimation = keyframes`
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
`;
const TileBorder = styled.div`
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  padding: 2px;
  animation: ${tileBorderAnimation} 2s linear;
  background: linear-gradient(240deg, rgba(58,74,120,1) 0%, rgba(20,24,33,1) 14%, rgba(62,68,79,1) 29%, rgba(31,34,42,1) 55%, rgba(70,74,84,1) 61%, rgba(20,24,33,1) 72%, rgba(44,48,60,1) 100%);
  animation-direction: alternate;
  animation-fill-mode: both;
  background-size: 200% 200%;
`;
const TileContent = styled.div`
  height: 100%;
  padding: 20px 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.TILE_BACKGROUND };
  cursor: pointer;
  transition: 500ms all;
  &:hover, &:focus {
    background: ${({ theme }) => theme.TILE_BACKGROUND_LIGHT };
  }
`;
const TileTitle = styled.h3``;
const TileText = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
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

const Tile = ({ className, title, complete, children, icon }) => {
  const getTileIcon = () => {
    if (icon) return <Sprite icon={icon} />
    if (TILE_ICONS[title]) return <TileImg src={`${process.env.PUBLIC_URL}/assets/images/${TILE_ICONS[title]}.svg`} alt={`${title} icon`} />
    return '';
  };
  
  return (
    <TileWrapper>
      <TileBorder>
        <TileContent className={className} tabIndex="0">
          <TopRow>
            <Status>
              <CheckIcon complete={complete}>
                <SpriteCheck icon="CHECK" size="10px" color="GRAY_DARKER" />
              </CheckIcon>
              {complete ? 'Complete' : 'Incomplete'}
            </Status>
            {/* If the user passes an icon, pull it from the spritesheet icons.  If nothing is passed, use the title.  If title doesn't match tile icon, use default */}
            <TileIcon complete={complete}>
              {getTileIcon()}
            </TileIcon>
          </TopRow>
          <TileTitle>{title}</TileTitle>
          <TileText>{children}</TileText>
          <BottomRow>
            <ArrowContainer>
              <Sprite icon="CALL_MADE" spin="45" width="30px" height="40px" color="ICON_PRIMARY" />
            </ArrowContainer>
          </BottomRow>
        </TileContent>
      </TileBorder>
    </TileWrapper>
  );
};

Tile.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.string,
};
Tile.defaultProps = {
  className: '',
  complete: false,
  children: '',
  icon: '',
};

export default Tile;
