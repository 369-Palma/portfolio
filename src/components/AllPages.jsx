import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Contacts from "./Contacts";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";

const AllPages = () => {
  return (
    <>
      <Container>
        <Row clasName="d-flex flex-column justify-content-center align-items-center ">
          <Col xs={12}>
            <HomePage />
          </Col>
          <Col xs={12} className="my-5">
            <About />
          </Col>
          <Col xs={12}>
            <Portfolio />
          </Col>
          <Col xs={12}>
            <Contacts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllPages;
