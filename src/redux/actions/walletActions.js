import { createAction } from 'redux-actions';
import { BRIDGE_WALLET_KYC_URL } from 'consts';
import { ajaxGet } from './xhrActions';

// Vars
// - Store
export const SET_WALLET_LOGIN = 'WALLET::SET_WALLET_LOGIN';
export const SET_WALLET_LOGOUT = 'WALLET::SET_WALLET_LOGOUT';
export const SET_WALLET_URL = 'WALLET::SET_WALLET_URL';
// - API
export const GET_WALLET_KYC = 'WALLET::GET_WALLET_KYC';

// Actions
// - Store
export const setWalletLogin = createAction(SET_WALLET_LOGIN);
export const setWalletLogout = createAction(SET_WALLET_LOGOUT);
export const setWalletUrl = createAction(SET_WALLET_URL);
// - API
export const getWalletKYC = ({address, publicKeyB64, fullJWT}) => async (dispatch) => {
  const configHeaders = { headers: {'x-prov-pubk': publicKeyB64, 'x-prov-jwt': fullJWT} };
  
  return (
    ajaxGet(
      GET_WALLET_KYC,
      dispatch,
      `${BRIDGE_WALLET_KYC_URL}/${address}`,
      configHeaders,
    )
  );
}
