import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import javascript from "../assets/images/javascript.png";
import typescript from "../assets/images/typesctipt.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import spring from "../assets/images/spring.png";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="d-flex flex-md-column flex-lg-row">
      <Row>
        <Col>
          <h1>About</h1>
          <p className="spaziatura">
            Determined, solution oriented, passionate about nature and
            innovation, and driven by curiosity. <br /> I firmly believe in
            technology's potential to drive positive change, <br />
            and my mission is to create a meaningful impact on both the planet
            and society.
          </p>
        </Col>
      </Row>
      <Row className=" mx-5 d-flex flex-row justify-content-center my-5">
        <Col md={3} lg={3} className="iconeSkills">
          <img src={html5} alt="logo html5" />
        </Col>
        <Col md={3} lg={3} className="iconeSkills">
          <img src={css3} alt="logo css3" />
        </Col>
        <Col md={3} lg={3} className="iconeSkills">
          <img src={javascript} alt="logo javascript" />
        </Col>
        <Col md={3} lg={3} className="iconeSkills">
          <img src={typescript} alt="logo typescript" />
        </Col>
        <Col md={3} lg={3} className="iconeSkills">
          <img src={react} alt="logo react" />{" "}
        </Col>
        <Col md={3} lg={3} className="iconeSkills">
          <img src={redux} alt="logo redux" />
        </Col>
        <Col md={3} lg={3} className="iconeSkills">
          <img src={spring} alt="logo spring boot" />
        </Col>
      </Row>
    </Container>
  );
};
export default About;
