import { PROVENANCE_WALLET_URL } from 'consts';
import { handleActions } from 'redux-actions';
import { SUCCESS, REQUEST, FAILURE } from '../actions/xhrActions';
import {
  SET_WALLET_LOGIN,
  SET_WALLET_LOGOUT,
  SET_WALLET_URL,
  GET_WALLET_KYC,
} from '../actions/walletActions';

export const initialState = {
  walletType: '',
  keychainAccountName: '',
  address: '',
  isLoggedIn: false,
  walletUrl: PROVENANCE_WALLET_URL,
  walletIcon: '',
  isKYC: false,
  isKYCLoading: false,
  isKYCFailed: false,
  isKYCChecked: false,
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
    /* -----------------
    GET_WALLET_KYC
    -------------------*/
    [`${GET_WALLET_KYC}_${REQUEST}`](state) {
      return {
        ...state,
        isKYC: false,
        isKYCLoading: true,
        isKYCFailed: false,
        isKYCChecked: true,
      };
    },
    [`${GET_WALLET_KYC}_${SUCCESS}`](state, { payload: isKYC }) {
      return {
        ...state,
        isKYC,
        isKYCLoading: false,
      };
    },
    [`${GET_WALLET_KYC}_${FAILURE}`](state) {
      return {
        ...state,
        isKYCLoading: false,
        isKYCFailed: true,
      };
    },
  },
  initialState
);

export default reducer;
