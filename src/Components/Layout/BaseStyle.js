import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BaseStyling = styled.div`
  height: 100%;
  min-height: 100vh;
  font-family: ${({ theme }) => theme.PRIMARY_FONT_FAMILY};
  color: ${({ theme }) => theme.FONT_PRIMARY};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_THINEST };
  font-size: 1.2rem;
  background: ${({ theme }) => theme.GRAY_LIGHTEST };
  a {
    color: ${({ theme }) => theme.FONT_LINK};
    :visited {
      color: ${({ theme }) => theme.FONT_LINK_VISITED};
    }
  }
  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.HEADER_FONT_FAMILY};
  }
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.PRIMARY_FONT_FAMILY};
  }
  p,
  span,
  li,
  footer {
    font-family: ${({ theme }) => theme.PRIMARY_FONT_FAMILY};
  }
  th {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT_NORMAL};
  }
`;

const BaseStyle = ({ children }) => <BaseStyling>{children}</BaseStyling>;

BaseStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseStyle;
