import { PROVENANCE_WALLET_URL } from 'consts';
import { handleActions } from 'redux-actions';
import {
  SET_WALLET_LOGIN,
  SET_WALLET_LOGOUT,
  SET_WALLET_URL,
} from '../actions/walletActions';

export const initialState = {
  walletType: '',
  keychainAccountName: '',
  address: '',
  isLoggedIn: false,
  walletUrl: PROVENANCE_WALLET_URL,
  walletIcon: '',
};

const reducer = handleActions(
  {
    /* -----------------
    SET_WALLET_URL
    -------------------*/
    [SET_WALLET_URL](state, { payload: walletUrl }) {
      return {
        ...state,
        walletUrl,
      };
    },
    /* -----------------
    SET_WALLET_LOGIN
    -------------------*/
    [SET_WALLET_LOGIN](state, { payload }) {
      const { address, keychainAccountName, walletType } = payload;
      const walletIcon = (walletType && walletType === 'PROVENANCE' && 'LOGO') || (walletType && walletType === 'FIGURE' && 'FIGURE')
      return {
        ...state,
        address,
        keychainAccountName,
        walletType,
        isLoggedIn: !!address,
        walletIcon,
      };
    },
    /* -----------------
    SET_WALLET_LOGOUT
    -------------------*/
    [SET_WALLET_LOGOUT](state, { payload }) {
      return {
        ...initialState,
      };
    },
  },
  initialState
);

export default reducer;
