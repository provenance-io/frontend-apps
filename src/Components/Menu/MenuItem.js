import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Sprite } from 'Components';
import { useApp } from 'redux/hooks';

const MenuItemContainer = styled.div`
  padding: 8px 12px;
  background: ${({ theme }) => theme.GRAY_LIGHTEST };
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;
const MenuTitle = styled.div`
  font-size: 1.4rem;
`;
const MenuIconContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  padding: 6px 6px 6px 8px;
  border-radius: 100%;
  background: ${({ theme }) => theme.BLUE_PRIMARY };
`;

const MenuItem = ({ className, title, section }) => {
  const { sectionElements } = useApp();
  
  const scrollTo = () => {
    if (section) {
      const targetElement = sectionElements[section];
      targetElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MenuItemContainer className={className} onClick={() => scrollTo()}>
      <MenuTitle>{title}</MenuTitle>
      <MenuIconContainer>
        <Sprite icon="CHEVRON" color="WHITE" flipX />
      </MenuIconContainer>
    </MenuItemContainer>
  );
}

MenuItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  section: PropTypes.string,
};
MenuItem.defaultProps = {
  className: '',
  section: '',
};

export default MenuItem;
