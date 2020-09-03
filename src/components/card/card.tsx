import * as React from "react";
import "./card.scss";
import ILaunch from "../../models/ILaunch";

type Props = { launch: ILaunch };

const Card: React.FC<Props> = props => {
  const { launch } = props;
  return (
    <div className="card">
      <div
        className="card-img"
        style={{
          background: `url(${launch.img}) 0% 50% / contain`
        }}
      ></div>
      {/* <img className="card-img" src={launch.img} alt="card" /> */}
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
};

export default Card;
