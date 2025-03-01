import {
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const inviaEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `service_d3vhlvl`,
        `template_j8faovd`,
        e.target,
        `3cG7_5IGDFHm5po4E`
      )
      .then(
        (result) => {
          toast.success("Email sent successfully");
          console.log(result.text);
        },
        (error) => {
          toast.error("Email not sent");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container className="boxContacts mx-auto py-3 mb-4">
      <h3> Questions? </h3>
      <h1> Contact me </h1>
      <Row className="mx-auto d-flex align-items-center justify-content-center text-center mt-5">
        <Col
          xs={12}
          md={2}
          className="links-social-box d-flex flex-row mx-auto justify-content-center flex-md-column flex-md-start flex-md-justify-content-center my-md-auto mb-3"
        >
          <Link
            to="mailto:palmaiacobelli92@gmail.com"
            target="_blank"
            className=" text-reset mb-md-3 fs-4"
          >
            <FontAwesomeIcon className="icone" icon={faGoogle} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/palma-iacobelli-482521185/?locale=it_IT"
            target="_blank"
            className=" text-reset mb-md-3 fs-4"
          >
            <FontAwesomeIcon className="icone" icon={faLinkedin} />
          </Link>
          <Link
            to="https://github.com/369-Palma"
            target="_blank"
            className=" text-reset mb-md-3 fs-4 "
          >
            <FontAwesomeIcon className="icone" icon={faGithub} />
          </Link>
        </Col>
        <Col xs={12} md={10} className="mx-auto mb-xs-3">
          <Form onSubmit={inviaEmail} className="p-5 bordo bg-black" >
            <Form.Group className="mb-4" controlId="formName">
              <Form.Label className="mb-2 d-flex text-start">Name:</Form.Label>
              <Form.Control
                className="campoForm"
                name="name"
                required
                type="text"
                autoComplete="off"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label className="mb-2 d-flex text-start">Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                autoComplete="off"
                className="campoForm"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label className="mb-2 d-flex text-start">Message:</Form.Label>
              <Form.Control
                className="campoForm"
                as="textarea"
                name="message"
                required
                autoComplete="off"
                rows={3}
                placeholder="Enter message"
              />
            </Form.Group>

            <button className="bottone" type="submit">
              Send
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
