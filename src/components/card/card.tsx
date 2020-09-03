import * as React from "react";
import { connect } from "react-redux";
import "./card.scss";
import ILaunch from "../../models/ILaunch";
import launches from "../../pages/launches";

type OwnProps = { launch: ILaunch };

type Props = {
  fetching: Boolean;
  data: Array<any>;
  error: string;
  onFetchData(): any;
};

type State = {};

class Card extends React.Component<Props & OwnProps, State> {
  componentDidMount() {
    this.props.onFetchData();
  }

  render() {
    const { launch } = this.props;
    return (
      <div className="card">
        <div
          className="card-img"
          style={{
            background: `url(${launch.img}) 0% 50% / contain`
          }}
        ></div>
        <div className="card-content">
          <div className="card-body">
            <div className="card-title">{launch.name}</div>
            <div className="card-subtitle">{launch.date}</div>
            <div className="card-description">{launch.details}</div>
          </div>
          <div className="card-footer">
            <div className="card-footer-info">{launch.classification}</div>
            <div className="card-footer-info">{launch.rocketName}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.reduxSaga.fetching,
    data: state.reduxSaga.data,
    error: state.reduxSaga.error,
    launch: ownProps.launch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => dispatch({ type: "API_ROCKETS_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
