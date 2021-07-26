import { createAction } from 'redux-actions';

// Vars
// - Store
export const SET_WALLET_LOGIN = 'WALLET::SET_WALLET_LOGIN';
export const SET_WALLET_LOGOUT = 'WALLET::SET_WALLET_LOGOUT';
export const SET_WALLET_URL = 'WALLET::SET_WALLET_URL';

// Actions
// - Store
export const setWalletLogin = createAction(SET_WALLET_LOGIN);
export const setWalletLogout = createAction(SET_WALLET_LOGOUT);
export const setWalletUrl = createAction(SET_WALLET_URL);
