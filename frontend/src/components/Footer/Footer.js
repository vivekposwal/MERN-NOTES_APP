import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#cc4242",
        width: "100%",
        position: "relative",
        bottom: 0,
        //left: 490,
      }}
    >
      <Container>
        <Row>
          <Col
            style={{ textAlign: "center", color: "white" }}
            className="text-centre py-3 "
          >
            Copyright &copy;Note Zipper
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
