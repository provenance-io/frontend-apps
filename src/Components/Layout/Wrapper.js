import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 106px 5%;
  position: relative;
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.BACKGROUND_LIGHT};
  font-size: 1.4rem;
`;

const Wrapper = ({ children, noHeader }) => (
  <PageWrapper data-testid="page-wrapper" noHeader={noHeader}>
    {children}
  </PageWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  noHeader: PropTypes.bool,
};

Wrapper.defaultProps = {
  children: null,
  noHeader: false,
};

export default Wrapper;
