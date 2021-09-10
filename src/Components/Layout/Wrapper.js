import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 130px 10% 130px 10%;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
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
