import { handleActions } from 'redux-actions';
import {
  SET_SECTION_ELEMENTS,
} from '../actions/appActions';

export const initialState = {
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
  },
  initialState
);

export default reducer;
