import * as React from "react";
import { connect } from "react-redux";

export interface AppReduxProps {
  fetching: Boolean;
  data: any;
  error: string;
  onFetchData(): any;
}

const App = (props: AppReduxProps) => (
  <div>
    <button onClick={props.onFetchData}>Click me</button>
    <div>{props.data}</div>
  </div>
);

const mapStateToProps = state => {
  return {
    fetching: state.reduxSaga.fetching,
    data: state.reduxSaga.data,
    error: state.reduxSaga.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
