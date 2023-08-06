import React from "react";
import StepperComponent from "../common/stepperComponent/StepperComponent";
import { Row, Col, Box } from "react-bootstrap";
import Heading from "../heading/Heading";
import "./resume.scss";
const EpamSystem = [
  {
    title: "Macy's theme provider",
    fromYear: 2021,
    toyear: 2022,
    content: "Client: Macy's",
    points: [
      'Developing the UI screens based on the requirements, using ReactJS functional programming',
      'Involved in testing in multiple browsers, and writing unit tests',
      'Involved in integrating Graph QL response to UI screens and calling API’s as well.'
    ]
  },
  {
    title: "Drop'n Go ",
    fromYear: 2020,
    toyear: 2021,
    content: "Macy's",
    points: [
      'Developing the UI screens based on the requirements, using ReactJS functional programming',
      'Involved in testing in multiple browsers, and writing unit tests',
      'Involved in integrating Graph QL response to UI screens and calling API’s as well.'
    ]
  },
  
];
const himansu = [
  {
    title: "Ksheeram. (Mobile application).",
    fromYear: 2017 ,
    toyear: 2018,
    content: "Client: Himansu ",
    points: [
      'Involved in designing screens & Business logic Focused on unit testing to avoid defects',
      'Unit testing, browser testing fixes for compatibility issues',
      'Involved in integrating Graph QL response to UI screens and calling API’s as well.'
    ]
  },
  {
    title: "TERK ",
    fromYear: 2017 ,
    toyear: 2017 ,
    content: "Voxx",
    points: [
      'Involved in developing web pages by given design',
      'Unit compatibility testing and give fixes',
      'Involved in integrating Graph QL response to UI screens and calling API’s as well.'
    ]
  },
  {
    title: "Speed Governor (Mobile application). ",
    fromYear: 2017 ,
    toyear: 2016 ,
    content: "DARS Mercy Da MIS",
    points: [
      'Involved in Designing screens and Business logic',
      'Developed script to get the data from API Calls and Modify as per requirements to display in frontend',
      'Unit compatibility testing and give fixes..'
    ]
  },
  
];
const virtusa = [
  {
    title: "AWAC Assess Design (INSURANCE).",
    fromYear: 2019 ,
    toyear: 2020,
    content: "Metlife",
    points: [
      'involved in developing react components as per the user stories and business logic',
      'Cross browser testing and fixes compatible issues',
      'Involved in integrating Graph QL response to UI screens and calling API’s as well.'
    ]
  },
  {
    title: "US Digital SQUAD NON-EOS",
    fromYear: 2019,
    toyear: 2018,
    content: "Metlife",
    points: [
      'Creating components using a proper react lifecycle.',
      'Reusing the react component using Remix framework',
      'Browser testing fixes for compatibility issues.'
    ]
  },
  {
    title: "Metlife",
    fromYear: 2018,
    toyear: 2018,
    content: "Metlife",
    points: [
      'Creating components using a proper react lifecycle.',
      'Reusing the react component using Remix framework',
      'Browser testing fixes for compatibility issues.'
    ]
  },
];
const Resume = () => {
  return (
    <>
      <div className="resume">
        <Row>
          <Heading heading={"Experience"} />
          <Col lg={6} sm={12} xs={12}>
          <h3 className="stepper-title">{"Epam Systems"}</h3>
            <StepperComponent stepBlocks={EpamSystem} />
            <h3 className="stepper-title">{"Himansu It Servieces"}</h3>
            <StepperComponent stepBlocks={himansu} />
          </Col>
          <Col lg={6} sm={12} xs={12}>
          <h3 className="stepper-title">{"Virtusa Consulting Servieces & Private Limited"}</h3>
            <StepperComponent stepBlocks={virtusa} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Resume;
