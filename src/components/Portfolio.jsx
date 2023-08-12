import { Container, Col, Row, Button, Card } from "react-bootstrap";
import sfondo from "../assets/images/sfondo.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <Container className="px-auto my-auto">
        <h1> My Projects</h1>

        {/* FULLSTACK PROJECTS */}

        <div className="containerWorks d-flex justify-content-center p-4">
          <Row>
            <h3> FULLSTACK </h3>
            <Col xs={12} md={6} className="flex-row">
              <Card className="carta mb-3">
                <Card.Img variant="top" src={sfondo} />
                <Card.Body className="bottomCard">
                  <Card.Title>Art gallery</Card.Title>
                  {/*  <p>Showcase of an Apulian artist's gallery</p> */}
                  <p className="mini">
                    Redux, Javascript, Java, Spring Boot, PostgreSQL
                  </p>

                  <Link
                    to="https://github.com/stars/369-Palma/lists/showcase-website-art"
                    target="_blank"
                  >
                    <Button variant="primary">Repo</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="carta mb-3">
                <Card.Img variant="top" src={sfondo} />
                <Card.Body className="bottomCard">
                  <Card.Title>EasyVacanza</Card.Title>

                  {/*  <p>Website for searching and booking holidays</p> */}
                  <p className="mini">
                    React, Javascript, Java, Spring Boot, PostgreSQL
                  </p>

                  <Link
                    to="https://github.com/stars/369-Palma/lists/capstone-project"
                    target="_blank"
                  >
                    <Button variant="primary">Repo</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
