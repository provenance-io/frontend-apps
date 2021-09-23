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
const BottomLink = styled.a``;
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
            <BottomLink href={url}>
              <Sprite icon="ARROW" color="WHITE" />
            </BottomLink>
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
