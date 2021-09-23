// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const MenuSvg = styled.svg`
//   --secondaryColor: ${({ secondaryColor }) => secondaryColor};
//   width: ${({ size, width }) => width || size};
//   height: ${({ size, height }) => height || size};
//   transform: ${({ flipX }) => flipX && `scaleX(-1)`} ${({ flipY }) => flipY && `scaleY(-1)`}
//     ${({ spin }) => Boolean(spin) && `rotate(${spin}deg)`};
// `;

// const MenuLineSvg = ({ className, color, alt, icon, secondaryColorm, ...rest }) => {
//   // Use the variable color name if it exists, else the actual color passed in, or else default color
//   const colorValue = theme[color] ? theme[color] : color || theme.ICON_PRIMARY;
//   const secondaryColorValue = theme[secondaryColor]
//     ? theme[secondaryColor]
//     : secondaryColor || theme.WHITE;
  
//   return (
//     <MenuSvg
//       {...rest}
//       alt={alt || `${icon} icon`}
//       color={colorValue}
//       secondaryColor={secondaryColorValue}
//     >
//       <use href={`#${icon}`} />
//     </MenuSvg>
//   );
// };

// MenuLineSvg.propTypes = {
//   className: PropTypes.string,
//   color: PropTypes.string,
//   flipX: PropTypes.bool,
//   flipY: PropTypes.bool,
//   height: PropTypes.string,
//   secondaryColor: PropTypes.string,
//   size: PropTypes.string,
//   spin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   width: PropTypes.string,
// };
// MenuLineSvg.defaultProps = {
//   className: '',
//   color: '',
//   flipX: false,
//   flipY: false,
//   height: null,
//   secondaryColor: 'WHITE',
//   size: '100%',
//   spin: 0,
//   width: null,
// };

// export default MenuLineSvg;
