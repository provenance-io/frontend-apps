import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sprite from 'Components/Sprite';
// import Link from 'Components/Link';
// import { breakpoints } from 'consts';
import { useWallet } from 'redux/hooks';
import * as allTiles from 'consts/tiles';

const TileWrapper = styled.div`
  height: 380px;
  width: 340px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 20px;
  overflow: hidden;
`;
const TileTop = styled.div`
  border-radius: 5px 5px 0 0;
`;
const TileIcon = styled.img`
  height: 100px;
  width: auto;
  z-index: 1;
`;
const TileTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
  margin-bottom: 20px;
`;
const TileBottom = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme.TILE_BG };
  border-radius: 0px 0px 5px 5px;
`;
const BottonIconContainer = styled.div`
  margin-right: 18px;
  ${({ hasPermission }) => hasPermission && 'cursor: pointer;' }
  position: relative;
  width: 90px;
  height: 90px;
`;
const BottomLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const BottomText = styled.p`
  font-size: 1.2rem;
  line-height: 20px;
  margin-bottom: 20px;
`;
const RequiredSection = styled.div``;
const RequiredText = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .24rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
`;
const RequireIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 10px;
  border-radius: 4px;
`;

const Tile = ({ className, tileName }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { permissions } = useWallet();
  const data = allTiles[tileName];
  const { complete = [], requires = [], active, icon, color } = data;
  // If not yet completed, override the url, content, and title from incomplete
  const finalData = isComplete ? data : {...data, ...data.incomplete}
  const { url, content, title } = finalData;
  const finalColor = hasPermission ? color : 'GRAY';
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
      const { icon: reqIcon, color: reqColor } = allTiles[name];
      return (
        <RequireIcon
          src={`${process.env.PUBLIC_URL}/assets/images/tileIcons/${reqIcon}.svg`}
          alt={`Requires ${name}`}
          title={`Requires ${name}`}
          key={name}
          color={reqColor}
        />
      )
    })
  };

  return active ? (
    <TileWrapper hasPermission={hasPermission}>
      <TileTop color={finalColor}>
        <TileIcon src={`${process.env.PUBLIC_URL}/assets/images/tileIcons/new/${icon}.svg`} alt={`${title} icon`} />
      </TileTop>
      <TileBottom color={finalColor}>
        <TileTitle>{title}</TileTitle>
        <BottomText>
          {content}
        </BottomText>
        {hasPermission ? (
          <BottonIconContainer>
            {hasPermission && <BottomLink href={url} />}
            <Sprite icon="CIRCLE_ARROW" color="WHITE" />
          </BottonIconContainer>
        ) : (
          <RequiredSection>
            <RequiredText>Requires:</RequiredText>
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
