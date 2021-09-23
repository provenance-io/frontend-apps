import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
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
