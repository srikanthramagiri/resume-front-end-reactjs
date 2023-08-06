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
          <p><b>Client: {item.content}</b></p>
          <ul>
             {getPoints(item.points)}
          </ul>
        </div>
      </>
    );
  });
  return block;
};
const getPoints = ( points) =>{
  return (
    points.map(item=>{
      return(<li>{item}</li>)
    })
  )
}

const StepperComponent = ({ stepBlocks }) => {
  return (<>
   
  {getStepBlocs(stepBlocks)}
  </>);
};
export default StepperComponent;
