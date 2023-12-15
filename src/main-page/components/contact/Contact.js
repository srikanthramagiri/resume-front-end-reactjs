import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import Heading from "../heading/Heading";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <Row>
          <Heading heading={"Contact"} />
          <Col xl={4} lg={4}>
            <div className="left-item-section">
              <div className="icon-section">
                <div className="icon">
                  <SlLocationPin />
                </div>
              </div>
              <div>
                <h4 className="left-item-heading">Location:</h4>
                <p className="location-content">
                  912 North charles st, Apt 70 Macomb Il 61455
                </p>
              </div>
            </div>
            <div className="left-item-section">
              <div className="icon-section">
                <div className="icon">
                  <AiOutlineMail />
                </div>
              </div>
              <div>
                <h4 className="left-item-heading">Email</h4>
                <p className="location-content">
                  srikanthramagiri5@gmail.com 
                </p>
              </div>
            </div>
            <div className="left-item-section">
              <div className="icon-section">
                <div className="icon">
                  <BsPhone />
                </div>
              </div>
              <div>
                <h4 className="left-item-heading">Phone</h4>
                <p className="location-content">+1 3092520253
                </p>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="email" placeholder="example@abc.com" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="">
                <Form.Control type="text" placeholder="subject" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="">
                <Form.Control as="textarea" placeholder="message" />
              </Form.Group>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
