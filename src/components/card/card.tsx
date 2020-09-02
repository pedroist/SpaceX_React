import * as React from "react";
import "./card.scss";
type Props = {};

const Card: React.FC<Props> = props => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={"https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"}
        alt="card"
      />
      <div className="card-content">
        <div className="card-body">
          <div className="card-title">Title</div>
          <div className="card-subtitle">Subtitle</div>
          <div className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-info">classNameification</div>
          <div className="card-footer-info">rocketName</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
