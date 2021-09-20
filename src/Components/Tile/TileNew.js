import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sprite from 'Components/Sprite';
// import Link from 'Components/Link';
// import { breakpoints } from 'consts';
import { useApp } from 'redux/hooks';
// import { getTileInfo } from 'utils';

const TileWrapper = styled.div`
  height: 360px;
  color: ${({ theme }) => theme.WHITE };
  width: 260px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 6px 0px ${({ theme }) => theme.BLACK30 };
  border-radius: 5px;
  margin: 20px;
`;
const TileTop = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  position: relative;
  padding: 30px 30px 0 30px;
  background: ${({ theme, color }) => `radial-gradient(100% 130% at 0% 0%, ${theme[`TILE_${color}_A`]} 70%, ${theme[`TILE_${color}_B`]} 130%)`};
  border-radius: 5px 5px 0 0;
  flex-grow: 1;
  flex-wrap: wrap;
`;
const TileTopPattern = styled.div`
  background-image: url('${process.env.PUBLIC_URL}/assets/images/other/hex01.png');
  opacity: 0.2;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;
const TileIcon = styled.img`
  height: 100px;
  width: auto;
  z-index: 1;
`;
const TileTitle = styled.h3`
  font-size: 2.2rem;
  flex-basis: 100%;
  text-align: center;
  z-index: 1;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD };
`;
const TileBottom = styled.div`
  padding: 20px;
  height: 120px;
  display: flex;
  align-items: center;
  background: ${({ theme, color }) => `radial-gradient(50% 50% at 50% 0%, ${theme[`TILE_${color}_C`]} 0%, ${theme[`TILE_${color}_D`]} 100%)`};
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
  line-height: 15px;
`;

const Tile = ({ className, data, color }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { appPermissions } = useApp();
  const { complete = [], requires = [], active, icon } = data;
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
      if(!appPermissions.includes(requirement)){
        permissionMissing = true;
      }
    });
    // Determine if use has completed this tile
    complete.forEach(requirement => {
      if(!appPermissions.includes(requirement)){
        tileIncomplete = true;
      }
    });
    // Update tile state to reflect permissions and completeness
    setHasPermission(!permissionMissing);
    setIsComplete(!tileIncomplete);
  }, [appPermissions, complete, requires]);
  
  // Loop through each requirement and make an image tile for it
  // const renderRequirements = () => {
  //   // Get the missing requirements for this tile
  //   const missingReqs = requires.filter(name => !appPermissions.includes(name));
  //   return missingReqs.map(name => {
  //     const { icon: reqIcon, title: reqTitle } = getTileInfo(name);
  //     return (
  //       <RequireIcon
  //         src={`${process.env.PUBLIC_URL}/assets/images/tileIcons/${reqIcon}.svg`}
  //         alt={`Requires ${reqTitle}`}
  //         title={`Requires ${reqTitle}`}
  //         key={reqTitle}
  //       />
  //     )
  //   })
  // };

  return active ? (
    <TileWrapper hasPermission={hasPermission}>
      <TileTop color={finalColor}>
        <TileTopPattern />
        <TileIcon src={`${process.env.PUBLIC_URL}/assets/images/tileIcons/new/${icon}.svg`} alt={`${title} icon`} />
        <TileTitle>{title}</TileTitle>
      </TileTop>
      <TileBottom color={finalColor}>
        <BottonIconContainer>
          {hasPermission && <BottomLink href={url} />}
          <Sprite icon="CIRCLE_ARROW" color="WHITE" />
        </BottonIconContainer>
        <BottomText>
          {content}
        </BottomText>
      </TileBottom>
    </TileWrapper>
  ) : null;
};

Tile.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  color: PropTypes.string,
};
Tile.defaultProps = {
  className: '',
  color: 'BLUE',
};

export default Tile;
