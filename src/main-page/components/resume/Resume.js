import React from "react";
import StepperComponent from "../common/stepperComponent/StepperComponent";
import { Row, Col, Box } from "react-bootstrap";
import Heading from "../heading/Heading";
import "./resume.scss";
const stepBlocks = [
  {
    title: "sample",
    fromYear: 2015,
    toyear: 2022,
    content: "alskdflsjdf",
  },
  {
    title: "sample2",
    fromYear: 2015,
    toyear: 2022,
    content: "alskdflsjdf",
  },
];
const Resume = () => {
  return (
    <>
      <div className="resume">
        <Row>
          <Heading heading={"Resume"} />
          <Col lg={6} sm={12} xs={12}>
            <StepperComponent stepBlocks={stepBlocks} />
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <StepperComponent stepBlocks={stepBlocks} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Resume;
