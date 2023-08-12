import { Col, Row, Container } from "react-bootstrap";
import cv1min from "../assets/images/cv1min.jpg";
const HomePage = () => {
  return (
    <Container className="content my-5">
      <Row className=" mx-auto  content__containercontent d-flex flex-column align-items-center justify-content-center flex-md-row ">
        <Col xs={12} md={6} className="d-flex flex-column mx-auto my-5">
          <p>
            Hi, <br />
            I'm Palma Iacobelli{" "}
          </p>
          <span className="frasi d-flex">
            Jr.
            <i> Web Developer</i>
            <i> Front end Developer</i>
            <i> Back end Developer</i>
            <i> Forester</i>
          </span>
        </Col>
        <Col>
          <img src={cv1min} className="foto" alt="foto Palma" />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
