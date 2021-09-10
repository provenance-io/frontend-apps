import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { breakpoints } from 'consts';

const LineSpacerContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HorizontalLineContainer = styled.div`
  display: flex;
  margin: 0 30px;
  height: 282px;
  width: 328px;
  align-items: flex-end;
  justify-content: ${({ position }) => position === 'left' ? 'flex-start' : 'flex-end'};
  @media ${breakpoints.down('lg')} {
    height: 250px;
    width: 275px;
  }
  @media ${breakpoints.down('md')} {
    height: 200px;
    width: 140px;
  }
`;
const HorizontalLine = styled.div`
  width: 50%;
  height: 2px;
  background: ${({ theme }) => theme.GRAY_DARK };
`;
const Line = styled.div`
  background: ${({ theme }) => theme.GRAY_DARK };
  height: 100%;
  width: 2px;
`;

export const LineSpacer = ({ className, horizontal, position }) => (
  horizontal ? (
    <HorizontalLineContainer position={position}>
      <HorizontalLine />
    </HorizontalLineContainer>
  ) : (
    <LineSpacerContainer className={className}>
      <Line />
    </LineSpacerContainer>
  )
);

LineSpacer.propTypes = {
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  position: PropTypes.string,
};
LineSpacer.defaultProps = {
  className: '',
  horizontal: false,
  position: '',
};
