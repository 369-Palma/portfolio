import { Col, Row, Container } from "react-bootstrap";
import cv1min from "../assets/images/cv1min.jpg";
import resume from "../assets/cv/CV Palma Iacobelli Developer_Eng.pdf";

const HomePage = () => {
  return (
    <Container className="content ">
      <Row className=" mx-auto  content__containercontent d-flex flex-column align-items-center justify-content-center flex-md-row ">
        <Col xs={12} md={6} className="d-flex flex-column mx-auto my-5">
          <p className="testo">
            Hi, <br />
            I'm Palma Iacobelli{" "}
          </p>
          <span className="frasi frasi d-flex w-100 text-center py-auto">
            Jr.
            <i> Web Developer</i>
            <i> Front end Developer</i>
            <i> Back end Developer</i>
            <i> Forester</i>
          </span>

          <a
            className="bottoneCv mx-auto mt-5 "
            href={resume}
            download="Resume_Palma_Iacobelli.pdf"
          >
            Download Resume
          </a>
        </Col>

        <Col>
          <img src={cv1min} className="foto" alt="foto Palma" />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
