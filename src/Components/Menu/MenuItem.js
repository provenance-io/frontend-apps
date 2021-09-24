import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Sprite } from 'Components';

const MenuItemContainer = styled.div`
  padding: 10px 18px;
  background: ${({ theme }) => theme.MENU_ITEM_BG };
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

const MenuItem = ({ className, title, section, active, indent }) => {
  const scrollTo = () => {
    if (section) {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <MenuItemContainer className={className} onClick={() => scrollTo()} indent={indent}>
      <MenuTitle>{title}</MenuTitle>
      <MenuIconContainer>
        <Sprite icon="CHEVRON" color={active ? 'ICON_LIGHT' : 'ICON_DARK'}flipX />
      </MenuIconContainer>
    </MenuItemContainer>
  );
}

MenuItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  section: PropTypes.string,
  active: PropTypes.bool,
  indent: PropTypes.string,
};
MenuItem.defaultProps = {
  className: '',
  section: '',
  active: false,
  indent: '',
};

export default MenuItem;
