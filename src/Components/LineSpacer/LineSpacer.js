import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LineSpacerContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Line = styled.div`
  background: ${({ theme }) => theme.GRAY_DARK };;
  height: 100%;
  width: 2px;
`;

export const LineSpacer = ({ className }) => (
  <LineSpacerContainer className={className}>
    <Line />
  </LineSpacerContainer>
);

LineSpacer.propTypes = {
  className: PropTypes.string,
};
LineSpacer.defaultProps = {
  className: '',
};
