import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
            <Row>
                <h3>Srikanth Ramagiri</h3>
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                <div className="copy-right">
                © Copyright
                <strong> MyResume</strong>
                . All Rights Reserved
      
                </div>
            </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
