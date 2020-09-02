import * as React from "react";
import { connect } from "react-redux";
import Card from "../card/card";
import ILaunch from "../../models/ILaunch";

type Props = {
  hasArray: Boolean;
  launches: Array<ILaunch>;
};

const CardList: React.FC<Props> = props => {
  const { launches } = props;
  return (
    <div>
      {(!launches || launches.length == 0) && <div>Loading...</div>}
      {launches &&
        launches.length > 0 &&
        launches.map(launch => <Card key={launch.id} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hasLaunches: state.reduxSaga.hasLaunches,
    launches: state.reduxSaga.launches
  };
};

export default connect(
  mapStateToProps,
  null
)(CardList);
