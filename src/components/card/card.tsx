import * as React from "react";
import "./card.scss";
import ILaunch from "../../models/ILaunch";
import LaunchClass from "../../models/launchClass";
import RocketsAPI from "../../api/rocketsAPI";
import * as _ from "lodash";
type Props = { launch: ILaunch };

type State = { launch: ILaunch };

class Card extends React.Component<Props, State> {
  readonly state: State = {
    launch: { ...this.props.launch }
  };

  componentDidMount() {
    //fetch correspondent rocket
    let launch = new LaunchClass();
    launch.launchClass({ ...this.state.launch });

    if (this.props && this.props.launch && this.props.launch.rocketId) {
      RocketsAPI.getRocketsHttpRequest(this.props.launch.rocketId)
        .then(rocket => {
          // fill rocket name and missing rocket images by accessing rocketAPI
          if (rocket && rocket.data) {
            if (rocket.data.name) {
              launch.rocketName = rocket.data.name;
            }
            if (
              !launch.img &&
              rocket.data.flickr_images &&
              rocket.data.flickr_images.length > 0
            ) {
              //since the most of the rockets have the same first image we will get a random one from the list
              let randIndex = _.random(0, rocket.data.flickr_images.length - 1);
              launch.img = rocket.data.flickr_images[randIndex];
            }
            //Now that we have a complete launch object we can save it on state:
            this.setState({ launch: launch });
          }
        })
        .catch(error => {
          let errorMessage = "";
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          console.warn(errorMessage);
        });
    }
  }
  render() {
    const { launch } = this.state;
    return (
      <div className="card">
        <div
          className="card-img"
          style={{
            background: `url(${launch.img}) 0% 50% / cover`
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

export default Card;
