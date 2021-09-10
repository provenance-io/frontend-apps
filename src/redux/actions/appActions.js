import { createAction } from 'redux-actions';

// Vars
// - Store
export const ADD_PERMISSIONS = 'APP::ADD_APP_PERMISSIONS';
export const SET_PERMISSIONS = 'APP::SET_APP_PERMISSIONS';
export const REMOVE_PERMISSIONS = 'APP::REMOVE_APP_PERMISSIONS';

// Actions
// - Store
export const addPermissions = createAction(ADD_PERMISSIONS);
export const setPermissions = createAction(SET_PERMISSIONS);
export const removePermissions = createAction(REMOVE_PERMISSIONS);
