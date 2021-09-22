import { createAction } from 'redux-actions';
import { BRIDGE_WALLET_KYC_URL, WALLET_PERMISSION_URL } from 'consts';
import { ajaxGet } from './xhrActions';

// Vars
// - Store
export const SET_WALLET_LOGIN = 'WALLET::SET_WALLET_LOGIN';
export const SET_WALLET_LOGOUT = 'WALLET::SET_WALLET_LOGOUT';
export const SET_WALLET_URL = 'WALLET::SET_WALLET_URL';
export const SET_JWT_TOKEN = 'WALLET::SET_JWT_TOKEN';
export const ADD_PERMISSIONS = 'WALLET::ADD_PERMISSIONS';
export const SET_PERMISSIONS = 'WALLET::SET_PERMISSIONS';
export const REMOVE_PERMISSIONS = 'WALLET::REMOVE_PERMISSIONS';
// - API
export const GET_WALLET_KYC = 'WALLET::GET_WALLET_KYC';
export const GET_PERMISSIONS = 'WALLET::GET_PERMISSIONS';

// Actions
// - Store
export const setWalletLogin = createAction(SET_WALLET_LOGIN);
export const setWalletLogout = createAction(SET_WALLET_LOGOUT);
export const setWalletUrl = createAction(SET_WALLET_URL);
export const setJwtToken = createAction(SET_JWT_TOKEN);
export const addPermissions = createAction(ADD_PERMISSIONS);
export const setPermissions = createAction(SET_PERMISSIONS);
export const removePermissions = createAction(REMOVE_PERMISSIONS);
// - API
export const getWalletKYC = ({address, fullJWT}) => async (dispatch) => {
  const configHeaders = { headers: {'x-prov-jwt': fullJWT} };
  
  return (
    ajaxGet(
      GET_WALLET_KYC,
      dispatch,
      `${BRIDGE_WALLET_KYC_URL}/${address}`,
      configHeaders,
    )
  );
};
export const getPermissions = (address) => async (dispatch) => (
  ajaxGet(
    GET_PERMISSIONS,
    dispatch,
    `${WALLET_PERMISSION_URL}/${address}`,
  )
);
