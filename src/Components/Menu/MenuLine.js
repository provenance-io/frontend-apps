import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuLineContainer = styled.div`
  ${({ top, right, bottom, left, direction }) => `
    ${top && `top: ${top}px;`}
    ${left && `left: ${left}px;`}
    ${bottom && `bottom: ${bottom}px;`}
    ${right && `right: ${right}px;`}
    ${(direction === 'left' || direction === 'right') ? `
      flex-direction: row;
      align-items: center;
      ${direction === 'left' ? 'flex-direction: row-reverse;' : ''}
    ` : ''}
    ${(direction === 'up' || direction === 'down') ? `
      flex-direction: column;
      justify-content: center;
      ${direction === 'up' ? 'flex-direction: column-reverse;' : ''}
    ` : ''}
  `}
  position: absolute;
  display: flex;
  z-index: 3;
`;
const Line = styled.div`
  width: ${({ direction, length }) => (direction === 'left' || direction === 'right') ? `${length}px` : '1px'};
  height: ${({ direction, length }) => (direction === 'up' || direction === 'down') ? `${length}px` : '1px'};
  background: ${({ color, theme }) => theme[color] };
  ${({ direction }) => (direction === 'up' || direction === 'down') ? `
    margin-left: 2px;
  ` : '' }
`;
const End = styled.div`
  height: 5px;
  width: 5px;
  background: ${({ theme, color }) => theme[color] };
  transform: rotate(45deg);
`;

// Create a line with a diamond end in a specified direction and length
// ex: --------◇ or ◇--------------------

const MenuLine = ({ className, color, length, direction, top, left, right, bottom }) => (
  <MenuLineContainer top={top} right={right} bottom={bottom} left={left} direction={direction}>
      <End color={color} />
      <Line color={color} length={length} direction={direction} />
  </MenuLineContainer>
);

MenuLine.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  length: PropTypes.string,
  direction: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
};
MenuLine.defaultProps = {
  className: '',
  color: 'MENU_LINE',
  length: '20',
  direction: 'down',
  top: '',
  left: '',
  right: '',
  bottom: '',
};

export default MenuLine;
