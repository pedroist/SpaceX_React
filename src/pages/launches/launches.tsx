import * as React from "react";
import { connect } from "react-redux";
import FilterPanel from "../../components/filter-panel/filter-panel";
import CardList from "../../components/card-list/card-list";
import "./launches.scss";

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
        <div className="launches">
          <h1 className="launches-title">Launches</h1>
          <FilterPanel />
          <CardList />
        </div>
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
    onFetchData: () => dispatch({ type: "API_LAUNCHES_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Launches);
