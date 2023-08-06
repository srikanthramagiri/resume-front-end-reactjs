import React from "react";
// import {Row, Col} from 'react-bootstrap'
import Heading from "../heading/Heading";
import Content from "../content/Content";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md"
import { LuClock4 } from "react-icons/lu"
import { GoOrganization } from "react-icons/go"
import "./facts.scss";

const heading = "Facts";
const text =
  "";
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
                <GoOrganization />
                
              </div>
              <div> Organizations</div>
              <CountUp end={3} className="countup"></CountUp>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div className="factsIconSection">
              <div className="factsIconDiv">
                <FaLaptopCode />
              </div>
              <div>Projects</div>
              <CountUp end={8} className="countup"></CountUp>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div className="factsIconSection">
              <div className="factsIconDiv">
                <LuClock4 />
              </div>
              <div>Time Spent hrs.</div>
              <CountUp end={14560} className="countup"></CountUp>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <div className="factsIconSection">
              <div className="factsIconDiv">
                <MdOutlineHandshake />
              </div>
              <div>Clients</div>
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
