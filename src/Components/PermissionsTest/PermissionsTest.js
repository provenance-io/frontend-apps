import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useWallet } from 'redux/hooks';

const PermissionsTestContainer = styled.div`
  position: fixed;
  z-index: 30;
  top:0;
  right: 0;
  width: 225px;
  background: ${({ theme }) => theme.BLUE_MUTED_PRIMARY };
  padding: 12px 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0 0 0 5px;
  opacity: 0.25;
  transition: 500ms all;
  &:hover, &:active, &:focus {
    opacity: 1;
  }
  input {
    padding: 8px 10px;
    border: none;
    border-radius: 5px 0 0 5px;
    width: 140px;
    outline: none;
  }
  button {
    border: none;
    background: ${({ theme }) => theme.BUTTON_BG };
    color: ${({ theme }) => theme.WHITE };
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
`;
const PermissionWrapper = styled.div`
  flex-basis: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.WHITE };
`;
const ClosePermission = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;
const Permission = styled.div``;

const PermissionsTest = ({ className }) => {
  const [permissionName, setPermissionName] = useState('');
  const { permissions, addPermissions, removePermissions } = useWallet();
  
  return (
    <PermissionsTestContainer className={className}>
      <input placeholder="Debug Permissions" value={permissionName} onChange={({ target }) => setPermissionName(target.value)}/>
      <button onClick={() => { (permissionName && addPermissions(permissionName)); setPermissionName('');}}>Add</button>
      {permissions.map(permission => (
        <PermissionWrapper key={permission}>
          <ClosePermission onClick={() => {removePermissions(permission); setPermissionName('');}}>✖</ClosePermission>
          <Permission>{permission}</Permission>
        </PermissionWrapper>
      ))}
    </PermissionsTestContainer>
  );
}

PermissionsTest.propTypes = {
  className: PropTypes.string,
};
PermissionsTest.defaultProps = {
  className: '',
};

export default PermissionsTest;
