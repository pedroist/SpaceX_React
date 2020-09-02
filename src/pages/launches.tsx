import * as React from "react";
import { connect } from "react-redux";
import FilterPanel from "../components/filter-panel/filter-panel";
import CardList from "../components/card-list/card-list";
import LaunchClass from "../models/launchClass";
import ILaunch from "../models/ILaunch";
import { Classification } from "../Constants";

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
        <div>
          <h1>Launches</h1>
          <FilterPanel />
          <CardList />
        </div>
      </React.Fragment>
    );
  }
}

function jsonToLaunchMapper(launchJSON: any): ILaunch {
  let launch: LaunchClass = new LaunchClass();

  if (launchJSON.id) {
    launch.id = launchJSON.id;
  }
  if (
    launchJSON.links &&
    launchJSON.links.flickr &&
    launchJSON.links.flickr.original &&
    launchJSON.links.flickr.original.length > 0
  ) {
    launch.img = launchJSON.links.flickr.original[0];
  }
  if (launchJSON.name) {
    launch.name = launchJSON.name;
  }
  if (launchJSON.date_utc) {
    launch.date = launchJSON.date_utc;
  }
  if (launchJSON.details) {
    launch.details = launchJSON.details;
  }
  if (launchJSON.success != null) {
    launch.success = launchJSON.success;
  }
  if (launchJSON.upcoming != null) {
    launch.upcoming = launchJSON.upcoming;
  }
  if (launchJSON.rocket) {
    launch.rocketId = launchJSON.rocket;
  }

  /* fill missing object parameters by logic*/
  //classification:
  if (launch.success) {
    launch.classification = Classification.SUCCESS;
  } else if (launch.upcoming) {
    launch.classification = Classification.UPCOMING;
  } else {
    launch.classification = Classification.FAILED;
  }

  return launch;
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
