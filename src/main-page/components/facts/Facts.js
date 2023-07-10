import React from "react";
// import {Row, Col} from 'react-bootstrap'
import Heading from "../heading/Heading";
import Content from "../content/Content";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { FaLaptopCode } from "react-icons/fa";
import "./facts.scss";

const heading = "Facts";
const text =
  " Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
const Facts = () => {
  return (
    <>
      <section className="Facts">
        <Row>
          <Heading heading={heading} />
          <Content text={text} />
        </Row>
        <div className="factslist">
        <Row>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div className="factsIconSection">
              <div className="factsIconDiv">
                <FaLaptopCode />
              </div>
              <CountUp end={14} className="countup"></CountUp>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div className="factsIconSection">
              <div className="factsIconDiv">
                <FaLaptopCode />
              </div>
              <CountUp end={8} className="countup"></CountUp>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div className="factsIconSection">
              <div className="factsIconDiv">
                <FaLaptopCode />
              </div>
              <CountUp end={14560} className="countup"></CountUp>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div className="factsIconSection">
              <div className="factsIconDiv">
                <FaLaptopCode />
              </div>
              <CountUp end={4} className="countup"></CountUp>
            </div>
          </Col>
        </Row>
        </div>
      </section>
    </>
  );
};
export default Facts;
