import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Sprite } from 'Components';
import * as allTiles from 'consts/tiles';
import { useWallet } from 'redux/hooks';

const MenuItemContainer = styled.div`
  padding: 10px 18px;
  background: ${({ theme, hasPermission }) => hasPermission ? theme.MENU_ITEM_ALLOWED_BG : theme.MENU_ITEM_BG };
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  transition: 500ms all;
  border-radius: 5px;
  ${({ indent }) => indent && `margin-left: ${indent}px;` }
  &:last-child {
    margin-bottom: 25px;
  }
  &:hover {
    background: ${({ theme }) => theme.MENU_ITEM_ACTIVE_BG };
  }
`;
const MenuTitle = styled.div`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_THIN };
`;
const MenuIconContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  padding: 6px 6px 6px 8px;
`;

const MenuItem = ({ className, section, indent, onClick, tileName }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { permissions } = useWallet();
  const data = allTiles[tileName];
  const { complete = [], requires = [], active } = data;
  // If not yet completed, override the url, content, and title from incomplete
  const finalData = isComplete ? data : {...data, ...data.incomplete}
  const { title } = finalData;
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
  // When user clicks a nav item, scroll to target section (if onClick isn't passed already)
  const scrollTo = () => {
    if (section) {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return active ? (
    <MenuItemContainer className={className} onClick={onClick || scrollTo} indent={indent} hasPermission={hasPermission}>
      <MenuTitle>{title}</MenuTitle>
      <MenuIconContainer>
        <Sprite icon="CHEVRON" color={hasPermission ? 'ICON_LIGHT' : 'ICON_DARK'}flipX />
      </MenuIconContainer>
    </MenuItemContainer>
  ) : null;
}

MenuItem.propTypes = {
  className: PropTypes.string,
  section: PropTypes.string,
  indent: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  tileName: PropTypes.string.isRequired,
};
MenuItem.defaultProps = {
  className: '',
  section: '',
  indent: '',
  onClick: '',
};

export default MenuItem;
