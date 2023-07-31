import React from "react";
import { Row, Col } from "react-bootstrap";
import "./skills.scss";
import Heading from "../heading/Heading";
import Content from "../content/Content";
import ProgressBarComponent from "../common/progress-bar/ProgressBarComponent";

const heading = "SKILLS";
const text =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
const Skills = () => {
  return (
    <>
      <Row>
        <Heading heading={heading} />
        <Content text={text} />
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <ProgressBarComponent label={"HTML"} number={90} />
            <ProgressBarComponent label={"CSS"} number={80} />
            <ProgressBarComponent label={"SASS"} number={80} />
            <ProgressBarComponent label={"JAVA SCRIPT"} number={95} />
            <ProgressBarComponent label={"JQUERY"} number={70} />
            <ProgressBarComponent label={"BOOTSTRAP"} number={80} />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <ProgressBarComponent label={"REACT JS"} number={95} />
            <ProgressBarComponent label={"REDUX"} number={90} />
            <ProgressBarComponent label={"NODE JS"} number={50} />
            <ProgressBarComponent label={"EXPRESS JS"} number={60} />
            <ProgressBarComponent label={"ANGULAR 13"} number={50} />
            <ProgressBarComponent label={"Cordova Mobile Apps"} number={60} />
          </Col>
        </Row>
      </Row>
    </>
  );
};
export default Skills;
