import React from "react";
import "./wrapper.scss";
import { Container, Row } from "react-bootstrap";

const Wrapper = ({ children }) => {
  return (
    <Container>
      <div className="section">{children}</div>
    </Container>
  );
};

export default Wrapper;
