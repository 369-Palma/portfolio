import {
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

const Contacts = () => {
  return (
    <Container className="boxContacts my-auto mx-auto py-3">
      <h3> Questions? </h3>
      <h1> Contact me </h1>
      <Row className="mx-auto d-flex align-items-center justify-content-center text-center mt-5">
        <Col
          xs={12}
          md={2}
          className="d-flex flex-row flex-md-column mx-auto justify-content-center flex-md-start flex-md-justify-content-space-evenly my-md-auto h-100 mb-3"
        >
          <Link
            to="mailto:palmaiacobelli92@gmail.com"
            target="_blank"
            className=" me-4 text-reset mb-md-3 fs-4"
          >
            <FontAwesomeIcon className="icone" icon={faGoogle} />
          </Link>
          <Link
            to="#"
            target="_blank"
            className=" me-4 text-reset mb-md-3 fs-4"
          >
            <FontAwesomeIcon className="icone" icon={faInstagram} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/palma-iacobelli-482521185/?locale=it_IT"
            target="_blank"
            className=" me-4 text-reset mb-md-3 fs-4"
          >
            <FontAwesomeIcon className="icone" icon={faLinkedin} />
          </Link>
          <Link
            to="https://github.com/369-Palma"
            target="_blank"
            className=" me-4 text-reset mb-md-3 fs-4 "
          >
            <FontAwesomeIcon className="icone" icon={faGithub} />
          </Link>
        </Col>
        <Col xs={12} md={10} className="mx-auto mb-xs-3">
          <Form className="p-5 bordo">
            <Form.Group className="mb-4" controlId="formName">
              <Form.Label className="mb-3">Name:</Form.Label>
              <Form.Control
                className="campoForm"
                type="name"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label className="mb-3">Email:</Form.Label>
              <Form.Control
                type="email"
                className="campoForm"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label className="mb-3">Message:</Form.Label>
              <Form.Control
                className="campoForm"
                type="textarea"
                Row={3}
                placeholder="Enter message"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
