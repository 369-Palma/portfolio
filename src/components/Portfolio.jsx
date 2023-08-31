import { Container, Col, Row, Button, Card } from "react-bootstrap";
import quizQuest from "../assets/images/quizQuest.png";
import artGallery from "../assets/images/artGallery.png";
import easyVacanza from "../assets/images/easyVacanza.png";
import { Link } from "react-router-dom";
import weatherApp from "../assets/images/weatherApp.png";
import energia from "../assets/images/energia.png";

const Portfolio = () => {
  return (
    <>
      <Container className="px-auto my-auto mx-auto">
        <h1> My Projects</h1>

        {/* FULLSTACK PROJECTS */}

        <div className="containerWorks d-flex flex-column align-items-center justify-content-center mx-2">
          <Row className="containerWorks mt-4">
            <h3 className="my-4"> FULLSTACK </h3>
            <Col xs={12} md={6} className="flex-row mb-4  mb-md-0">
              <Card className="carta mb-3">
                <Card.Img
                  className="coverPortfolio"
                  variant="top"
                  src={artGallery}
                />

                <div className="info">
                  <p className="py-2">
                    Showcase of an Apulian artist's gallery
                  </p>
                  <p className="mini">
                    Redux, Javascript, Bootstrap, Java, Spring Boot, PostgreSQL
                  </p>

                  <Link
                    to="https://github.com/stars/369-Palma/lists/showcase-website-art"
                    target="_blank"
                  >
                    <Button className="bottone">REPO</Button>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="carta mb-3 h-100" id="carta">
                <Card.Img
                  className="coverPortfolio"
                  variant="top"
                  src={easyVacanza}
                />

                <div className="info">
                  <p className="py-2">
                    {" "}
                    Website for searching and booking holidays
                  </p>
                  <p className="mini">
                    React, Bootstrap, Javascript, Java, Spring Boot, PostgreSQL,
                    Faker
                  </p>

                  <Link
                    to="https://github.com/stars/369-Palma/lists/capstone-project"
                    target="_blank"
                  >
                    <Button className="bottone">REPO</Button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>

          {/* FRONTEND */}
          <Row className="containerWorks my-5 mx-auto ">
            <h3 className="my-4"> FRONTEND </h3>
            <Col xs={12} md={6} className="flex-row mb-4 mb-md-0">
              <Card className="carta mb-3  h-100 " id="cartaWeather">
                <Card.Img
                  className="coverPortfolio "
                  variant="top"
                  src={weatherApp}
                />

                <div className="info">
                  <p className="py-2">Weather forecast</p>
                  <p className="mini">
                    TypeScript, Vite, CSS <br />
                    API: Geocoding API, 3-hour Forecast 5 days
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <Link
                      to="https://github.com/369-Palma/weather_app_ts.git"
                      target="_blank"
                    >
                      <Button className="bottone m-2 ">REPO</Button>
                    </Link>
                    <Link
                      to="https://weather-app-typescript-ruddy.vercel.app"
                      target="_blank"
                    >
                      <Button className="bottone m-2 ">DEMO</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="carta mb-3 " id="cartaQuiz">
                <Card.Img
                  className="coverPortfolio"
                  variant="top"
                  src={quizQuest}
                />

                <div className="info">
                  <p className="py-2"> Multiple choice quiz game</p>
                  <p className="mini">
                    TypeScript, React, Vite <br />
                    API: Open Trivia
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <Link
                      to="https://github.com/369-Palma/quiz_app_ts.git"
                      target="_blank"
                    >
                      <Button className="bottone">REPO</Button>
                    </Link>
                    <Link
                      to="https://quiz-app-gz0wp08b7-369-palma.vercel.app"
                      target="_blank"
                    >
                      <Button className="bottone m-2 ">DEMO</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* BACKEND */}
          <Row className="containerWorks mb-5 ">
            <h3 className="my-4"> BACKEND </h3>
            <Col xs={12} md={6} className="flex-row mx-auto">
              <Card className="carta mb-3" id="cartaEnergia">
                <Card.Img
                  className="coverPortfolio"
                  variant="top"
                  src={energia}
                />

                <div className="info my-md-auto">
                  <p className="mb-0 mb-md-2 py-md-2 fs-5 ">
                    Energy management
                  </p>
                  <p className="fs-6 my-0 my-md-3">
                    Project realized in collaboration.
                  </p>
                  <p className="mini">Java, Spring Boot, JUnit 5, PostgreSQL</p>

                  <Link
                    to="https://github.com/VincenzoDePascale/Spring_gestioneEnergia"
                    target="_blank"
                  >
                    <Button className="bottone ">REPO</Button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
