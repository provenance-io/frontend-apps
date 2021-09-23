import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {default as BaseSprite} from 'Components/Sprite';
// import Link from 'Components/Link';
// import { breakpoints } from 'consts';
import { useWallet } from 'redux/hooks';
import * as allTiles from 'consts/tiles';

const TileWrapper = styled.div`
  /* height: 500px; */
  width: 340px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 8px;
  margin: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.TILE_BORDER };
`;
const TileCover = styled.a`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  z-index: 2;
  background: transparent;
  transition: 500ms all;
  opacity: 0;
  background: radial-gradient(80.87% 32.41% at 49.85% 0%, #738ECA 6.25%, rgba(55, 78, 125, 0) 96.35%), radial-gradient(117.93% 56.41% at 113.12% 107.17%, #616E9D 6.25%, rgba(65, 67, 122, 0.71) 35.94%, rgba(56, 94, 121, 0) 100%);
  &:hover {
    opacity: 1;
  }
`;
const TileTop = styled.div`
  border-radius: 5px 5px 0 0;
  ${({ hasPermission }) => !hasPermission && `
    filter: saturate(0%);
  ` }
`;
const TileIcon = styled.img`
  width: 100%;
  z-index: 1;
`;
const TileTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  margin-bottom: 20px;
`;
const TileBottom = styled.div`
  padding: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.TILE_BG};
  border-radius: 0px 0px 5px 5px;
`;
const BottomLinkSection = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;
const BottomIcon = styled.div``;
const Sprite = styled(BaseSprite)`
  height: 100%;
  width: 100%;
  width: 21px;
  height: 14px;
`;
const BottomText = styled.p`
  font-size: 1.2rem;
  line-height: 20px;
  margin-bottom: 40px;
`;
const RequiredSection = styled.div``;
const RequiredText = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .24rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  margin-bottom: 14px;
`;
const RequireIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const Tile = ({ className, tileName }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { permissions } = useWallet();
  const data = allTiles[tileName];
  const { complete = [], requires = [], active, icon } = data;
  // If not yet completed, override the url, content, and title from incomplete
  const finalData = isComplete ? data : {...data, ...data.incomplete}
  const { url, content, title } = finalData;
  // Check permissions on each render
  useEffect(() => {
    let permissionMissing = false;
    let tileIncomplete = false;
    // Determine is user has permission for this tile
    requires.forEach(requirement => {
      if(!permissions.includes(requirement)){
        permissionMissing = true;
      }
    });
    // Determine if use has completed this tile
    complete.forEach(requirement => {
      if(!permissions.includes(requirement)){
        tileIncomplete = true;
      }
    });
    // Update tile state to reflect permissions and completeness
    setHasPermission(!permissionMissing);
    setIsComplete(!tileIncomplete);
  }, [permissions, complete, requires]);
  
  // Loop through each requirement and make an image tile for it
  const getRequiredImages = () => {
    // Get the missing requirements for this tile
    const missingReqs = requires.filter(name => !permissions.includes(name));
    return missingReqs.map(name => {
      const { icon: reqIcon } = allTiles[name];
      return (
        <RequireIcon
          src={`${process.env.PUBLIC_URL}/assets/images/reqIcons/${reqIcon}.svg`}
          alt={`Requires ${name}`}
          title={`Requires ${name}`}
          key={name}
        />
      )
    })
  };

  return active ? (
    <TileWrapper>
      {hasPermission && <TileCover href={url} />}
      <TileTop hasPermission={hasPermission}>
        <TileIcon src={`${process.env.PUBLIC_URL}/assets/images/tileIcons/${icon}.svg`} alt={`${title} icon`} />
      </TileTop>
      <TileBottom>
        <TileTitle>{title}</TileTitle>
        <BottomText>
          {content}
        </BottomText>
        {hasPermission ? (
          <BottomLinkSection>
            <BottomIcon>
              <Sprite icon="ARROW" color="WHITE" />
            </BottomIcon>
          </BottomLinkSection>
        ) : (
          <RequiredSection>
            <RequiredText>Requires</RequiredText>
            {getRequiredImages()}
          </RequiredSection>
        )}
      </TileBottom>
    </TileWrapper>
  ) : null;
};

Tile.propTypes = {
  className: PropTypes.string,
  tileName: PropTypes.string.isRequired,
};
Tile.defaultProps = {
  className: '',
};

export default Tile;
