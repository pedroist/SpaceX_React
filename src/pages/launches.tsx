import * as React from "react";
import { connect } from "react-redux";

type Props = {
  fetching: Boolean;
  data: Array<any>;
  error: string;
  onFetchData(): any;
};

type State = {};

class Launches extends React.Component<Props, State> {
  componentDidMount() {
    this.props.onFetchData();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Launches</h1>
        <p>Component illustrative just to demonstrate routing is working</p>
      </React.Fragment>
    );
  }
}

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
)(Launches);
