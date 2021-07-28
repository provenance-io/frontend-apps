import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = ({ to, children, ...props }) => {
  // It is a simple element with nothing to link to
  if (!to) return <span {...props}>{children}</span>;

  // It is intended to be an external link
  if (/^https?:\/\//.test(to)) return <a href={to} {...props}>{children}</a>;

  // Finally, it is an internal link
  return <ReactRouterLink to={to} {...props}>{children}</ReactRouterLink>;
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};
Link.defaultProps = {
  to: '',
  children: '',
};

export default Link;
