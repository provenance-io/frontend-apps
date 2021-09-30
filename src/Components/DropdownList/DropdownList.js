import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dropdownItems, breakpoints } from 'consts';
import { Sprite } from 'Components';

const DropdownListContainer = styled.div`
  padding: 0px 12px;
  background: ${({ theme }) => theme.BLUE_MUTED_DARK };
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  @media ${breakpoints.down('sm')} {
    width: 100%;
  }
`;

const Dropdown = styled.select`
  padding: 12px 0px;
  background: ${({ theme }) => theme.BLUE_MUTED_DARK };
  border: none;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.WHITE };
  text-transform: uppercase;
  letter-spacing: 0.24rem;
  font-size: 1.2rem;
  -webkit-appearance: none;
`;

const DropdownList = ({ className, onChange, value }) => (
  <DropdownListContainer className={className}>
    <Dropdown onChange={onChange} value={value}>
      {dropdownItems.map(item => (
        <option key={item} value={item}>{item}</option>
      ))}
    </Dropdown>
    <Sprite icon="CARET" size="1.3rem" />
  </DropdownListContainer>
);

DropdownList.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
DropdownList.defaultProps = {
  className: '',
  onChange: () => {},
  value: '',
};

export default DropdownList;
