import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Contacts from "./Contacts";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";
import NavBar from "./NavBar";

const AllPages = () => {

  return (
    
      <Container style={{width:"100%"}}>
        <NavBar />
        <Row clasName="d-flex flex-column justify-content-center align-items-center ">
          <Col xs={12} id="home">
            <HomePage isScrolling={false} currentPage={"home"}/>
          </Col>
          <Col xs={12} id="about" className="my-5">
            <About />
          </Col>
          <Col xs={12} id="portfolio">
            <Portfolio />
          </Col>
          <Col xs={12} id="contacts">
            <Contacts />
          </Col>
        </Row>
      </Container>
 
  );
};

export default AllPages;
