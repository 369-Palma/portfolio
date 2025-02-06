import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import javascript from "../assets/images/javascript.png";
import typescript from "../assets/images/typesctipt.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import spring from "../assets/images/spring.png";
import postgreSQL from "../assets/images/postgreSQL.png";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";

const About = () => {
  return (
      <Container className="mt-4 containerAbout d-flex flex-column justify-content-center align-items-center">
        <Row className="boxAbout">
          <Col className="descrizione">
            <h1>About</h1>
            <p className="textAbout ">
              Determined, solution oriented, passionate about nature and
              innovation, and driven by curiosity. <br /> I firmly believe in
              technology's potential to drive positive change, <br /> and my
              mission is to create a meaningful impact on both the planet and
              society.
            </p>
          </Col>
        </Row>
        <Row className="boxImg mx-5 d-flex flex-row justify-content-center  my-auto">
          <h3 className="sottotitoli pb-3 mt-4"> Technical skills </h3>
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
            <img src={react} alt="logo react" />
          </Col>
          <Col md={3} lg={3} className="iconeSkills">
            <img src={redux} alt="logo redux" />
          </Col>
          <Col md={3} lg={3} className="iconeSkills">
            <img src={spring} alt="logo spring boot" />
          </Col>
          <Col md={3} lg={3} className="iconeSkills">
            <img src={postgreSQL} alt="logo postgreSQL boot" />
          </Col>
        </Row>
      </Container>
  );
};
export default About;
