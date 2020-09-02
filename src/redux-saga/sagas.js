import { takeLatest, call, put } from "redux-saga/effects";
import LaunchesAPI from "../api/launchesAPI";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_LAUNCHES_REQUEST", workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchData);
    const data = response.data;

    // dispatch a success action to the store with the data fetched
    yield put({ type: "API_LAUNCHES_SUCCESS", data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_LAUNCHES_FAILURE", error });
  }
}

// function that returns api response
function fetchData() {
  return LaunchesAPI.getLaunchesHttpRequest();
}
