import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dropdownItems } from 'consts';

const DropdownListContainer = styled.div`
  padding: 0px 12px;
  background: ${({ theme }) => theme.BLUE_MUTED_DARK };
  width: 320px;
  border-radius: 4px;
`;

const Dropdown = styled.select`
  padding: 12px 0px;
  background: ${({ theme }) => theme.BLUE_MUTED_DARK };
  border: none;
  outline: none;
  width: 300px;
  color: ${({ theme }) => theme.WHITE };
  text-transform: uppercase;
  letter-spacing: 0.24rem;
  font-size: 1.2rem;
`;
const DropdownOption = styled.option`

`;

const DropdownList = ({ className, onChange, value }) => (
  <DropdownListContainer className={className}>
    <Dropdown onChange={onChange} value={value}>
      {dropdownItems.map(item => (
        <DropdownOption key={item} value={item}>{item}</DropdownOption>
      ))}
    </Dropdown>
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
