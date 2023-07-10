import React from "react";
import { Row, Col } from "react-bootstrap";
import "./skills.scss";
import Heading from "../heading/Heading";
import Content from "../content/Content";
import ProgressBar from "react-bootstrap/ProgressBar";

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
            <div className="progress">
              <span className="progress-label">Htlm</span>
              <ProgressBar  className="progressbar" now={60} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}></Col>
        </Row>
      </Row>
    </>
  );
};
export default Skills;
