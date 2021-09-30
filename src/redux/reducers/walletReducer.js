import { handleActions } from 'redux-actions';
import { addToSessionStorage, removeFromSessionStorage } from 'utils';
import { SUCCESS, REQUEST, FAILURE } from '../actions/xhrActions';
import {
  SET_WALLET_LOGIN,
  SET_WALLET_LOGOUT,
  SET_JWT_TOKEN,
  SET_WALLET_URL,
  GET_WALLET_KYC,
  GET_PERMISSIONS,
  SET_PERMISSIONS,
  ADD_PERMISSIONS,
  REMOVE_PERMISSIONS,
} from '../actions/walletActions';

export const initialState = {
  permissions: [],
  permissionsLoading: false,
  permissionsFailed: false,
  walletType: '',
  keychainAccountName: '',
  address: '',
  publicKeyB64: '',
  isLoggedIn: false,
  walletUrl: '',
  walletIcon: '',
};

const reducer = handleActions(
  {
    /* -----------------
    GET_PERMISSIONS
    -------------------*/
    [`${GET_PERMISSIONS}_${REQUEST}`](state) {
      return {
        ...state,
        permissionsLoading: true,
        permissionsFailed: false,
        permissions: [],
      };
    },
    [`${GET_PERMISSIONS}_${SUCCESS}`](state, { payload }) {
      // Main info exists within attributes
      const { attributes = [] } = payload;
      const permissions = ['wallet'];
      // Loop through each attribute and note permissions
      attributes.forEach(({ name }) => {
        if (name.includes('kyc-aml.passport')) {
          permissions.push('passport');
        }
      });

      return {
        ...state,
        permissionsLoading: false,
        permissions,
      };
    },
    [`${GET_PERMISSIONS}_${FAILURE}`](state) {
      return {
        ...state,
        permissionsLoading: false,
        permissionsFailed: true,
      };
    },
    /* -----------------
    SET_PERMISSIONS
    -------------------*/
    [SET_PERMISSIONS](state, { payload: permissions }) {
      return {
        ...state,
        permissions,
      };
    },
    /* -----------------
    ADD_PERMISSIONS
    -------------------*/
    [ADD_PERMISSIONS](state, { payload }) {
      const isArray = Array.isArray(payload);
      const permissions = [...state.permissions];
      // Turn it into an array if not one already
      const names = isArray ? payload : [payload];
      // Loop through the names and if it doesn't already exist in permissions, add it
      names.forEach(name => {
        if (!permissions.includes(name)) {
          permissions.push(name);
        }
      });
      return {
        ...state,
        permissions,
      };
    },
    /* ----------------------
    REMOVE_PERMISSIONS
    -----------------------*/
    [REMOVE_PERMISSIONS](state, { payload }) {
      const isArray = Array.isArray(payload);
      // Turn it into an array if not one already
      const names = isArray ? payload : [payload];
      // Clone current permissions to make changes
      const permissions = [...state.permissions];
      // Loop through each name, removing it from the permissions if it's there
      names.forEach(name => {
        const index = permissions.indexOf(name);
        if (index > -1) permissions.splice(index, 1);
      });
      return {
        ...state,
        permissions,
      };
    },
    /* -----------------
    SET_JWT_TOKEN
    -------------------*/
    [SET_JWT_TOKEN](state, { payload: jwtToken }) {
      // Are we clearing the jwt out by passing ''?
      jwtToken ? addToSessionStorage({jwtToken}) : removeFromSessionStorage('jwtToken');

      return {
        ...state,
        jwtToken,
      };
    },
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
      const {
        address,
        keychainAccountName,
        walletType,
        publicKeyB64,
        randomB64,
        signedB64,
      } = payload;
      const walletIcon = (walletType && walletType === 'PROVENANCE' && 'LOGO') || (walletType && walletType === 'FIGURE' && 'FIGURE')
      return {
        ...state,
        address,
        keychainAccountName,
        walletType,
        isLoggedIn: !!address,
        walletIcon,
        publicKeyB64,
        randomB64,
        signedB64,
      };
    },
    /* -----------------
    SET_WALLET_LOGOUT
    -------------------*/
    [SET_WALLET_LOGOUT](state) {
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
    [`${GET_WALLET_KYC}_${SUCCESS}`](state, { payload }) {
      const isKYC = !!payload;
      
      addToSessionStorage({isKYC})
      
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
