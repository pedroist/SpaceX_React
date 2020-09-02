import { takeLatest, call, put } from "redux-saga/effects";
import LaunchesAPI from "../api/launchesAPI";
import jsonToLaunchMapper from "../mappers/launchMapper";

/* === LaunchesSagas === */

// launches saga: watches for actions dispatched to the store related to launches, starts worker saga
export function* launchesSaga() {
  yield takeLatest("API_LAUNCHES_REQUEST", workerSaga);
}

// launches saga: makes the api call when launches saga sees the action
function* workerSaga() {
  let launchesArray = [];

  try {
    const response = yield call(fetchLaunches);
    const data = response.data;

    // dispatch a success action to the store with the data fetched
    yield put({ type: "API_LAUNCHES_SUCCESS", data });

    //For each element of array we re going to map the important attributes and add to launchesArray
    data.map(launchJSON => {
      if (launchJSON) {
        //map to a Launch object (model) and add to an Array
        launchesArray.push(jsonToLaunchMapper(launchJSON));
      }
    });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_LAUNCHES_FAILURE", error });
  }
}

// function that returns api response
function fetchLaunches() {
  return LaunchesAPI.getLaunchesHttpRequest();
}
