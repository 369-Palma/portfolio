import { Col, Row } from "react-bootstrap";
import cv1min from "../assets/images/cv1min.jpg";
const HomePage = () => {
  return (
    <Row className="my-auto d-flex justify-content-center">
      <Col xs={12} md={6} className="my-auto">
        <h1>
          {" "}
          Hi, <br />
          I'm Palma Iacobelli <br />
          Jr. web developer{" "}
        </h1>
      </Col>
      <Col xs={12} md={6} className="foto mx-auto my-auto">
        <img src={cv1min} className="w-100 profilo" alt="foto Palma" />
      </Col>
    </Row>
  );
};
export default HomePage;
