import {
  API_LAUNCHES_REQUEST,
  API_LAUNCHES_SUCCESS,
  API_LAUNCHES_FAILURE
} from "./actions";

/* === REDUCER === */

const initialState = {
  fetching: false,
  data: null,
  error: null
};

export default function reduxSagaReducer(state = initialState, action) {
  switch (action.type) {
    case API_LAUNCHES_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case API_LAUNCHES_SUCCESS:
      return { ...state, fetching: false, data: action.data };
      break;
    case API_LAUNCHES_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
      break;
    default:
      return state;
  }
}
