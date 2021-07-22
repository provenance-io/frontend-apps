import { handleActions } from 'redux-actions';
import {
  SAMPLE_APP_ACTION,
} from '../actions/appActions';

export const initialState = {
  sampleValue: '',
};

const reducer = handleActions(
  {
    /* -----------------
    SAMPLE_APP_ACTION
    -------------------*/
    [SAMPLE_APP_ACTION](state, { payload: sampleValue }) {
      return {
        ...state,
        sampleValue,
      };
    },
  },
  initialState
);

export default reducer;
