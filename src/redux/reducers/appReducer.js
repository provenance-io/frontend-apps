import { handleActions } from 'redux-actions';
import {
  ADD_PERMISSIONS,
  SET_PERMISSIONS,
  REMOVE_PERMISSIONS,
  SET_SECTION_ELEMENTS,
} from '../actions/appActions';

export const initialState = {
  appPermissions: [],
  sectionElements: {},
};

const reducer = handleActions(
  {
    /* -----------------
    SET_SECTION_ELEMENTS
    -------------------*/
    [SET_SECTION_ELEMENTS](state, { payload }) {
      const sectionElements = { ...state.sectionElements, ...payload };
      return {
        ...state,
        sectionElements,
      };
    },
    /* -----------------
    SET_PERMISSIONS
    -------------------*/
    [SET_PERMISSIONS](state, { payload: appPermissions }) {
      return {
        ...state,
        appPermissions,
      };
    },
    /* -----------------
    ADD_PERMISSIONS
    -------------------*/
    [ADD_PERMISSIONS](state, { payload }) {
      const isArray = Array.isArray(payload);
      const appPermissions = [...state.appPermissions];
      // Turn it into an array if not one already
      const names = isArray ? payload : [payload];
      // Loop through the names and if it doesn't already exist in appPermissions, add it
      names.forEach(name => {
        if (!appPermissions.includes(name)) {
          appPermissions.push(name);
        }
      });
      return {
        ...state,
        appPermissions,
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
      const appPermissions = [...state.appPermissions];
      // Loop through each name, removing it from the permissions if it's there
      names.forEach(name => {
        const index = appPermissions.indexOf(name);
        if (index > -1) appPermissions.splice(index, 1);
      });
      return {
        ...state,
        appPermissions,
      };
    },
  },
  initialState
);

export default reducer;
