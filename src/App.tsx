import * as React from "react";
import { connect } from "react-redux";

type Props = {
  fetching: Boolean;
  data: Array<any>;
  error: string;
  onFetchData(): any;
};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <button onClick={this.props.onFetchData}>Click me</button>
        {console.log(this.props.data)}
      </div>
    );
  }
}

// const App = (props: Props) => (
//   <div>
//     <button onClick={props.onFetchData}>Click me</button>
//     {console.log(props.data)}
//   </div>
// );

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
