import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'redux/hooks';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

const Menu = ({ className }) => {
  const { matches: useMobile } = useMediaQuery('down', 'md');
  
  return (useMobile ? <MenuMobile /> : <MenuDesktop />);
};

Menu.propTypes = {
  className: PropTypes.string,
};
Menu.defaultProps = {
  className: '',
};

export default Menu;
