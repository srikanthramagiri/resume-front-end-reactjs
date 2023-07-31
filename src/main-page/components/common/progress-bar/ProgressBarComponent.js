import React from "react";
import "./progressBarComponent.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressBarComponent = ({label, number}) => {
  return(
  <div className="progress-bar">
    <span className="skills">
        {label}
        <i className="val">{number}</i>
    </span>
      <ProgressBar now={number} />
    </div>
    )
};
export default ProgressBarComponent;
