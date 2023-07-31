import React from "react";
import "./stepperComponent.scss";

const getStepBlocs = (stepBlocks) => {
  const block = stepBlocks.map((item) => {
    return (
      <>
       
        <div className="stepper-item">
          <h4>{item.title}</h4>
          <h5 className="year">
            {item.fromYear} - {item.toyear}
          </h5>
          <p>{item.content}</p>
          <ul>
            <li>Portland par 127,Orlando, FL</li>
            <li>Portland par 127,Orlando, FL</li>
            <li>Portland par 127,Orlando, FL</li>
          </ul>
        </div>
      </>
    );
  });
  return block;
};

const StepperComponent = ({ stepBlocks }) => {
  return (<>
   <h3 className="stepper-title">{"resume title"}</h3>
  {getStepBlocs(stepBlocks)}
  </>);
};
export default StepperComponent;
