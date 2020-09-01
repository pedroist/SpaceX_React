import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "./actions";

/* === REDUCER === */

const initialState = {
  fetching: false,
  data: null,
  error: null
};

export default function reduxSagaReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.data };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
      break;
    default:
      return state;
  }
}
