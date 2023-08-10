import { Nav, Navbar, Row, Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Navbar
      expand="md"
      className=" d-flex navbar navbar-expand-md navbar-dark pb-3"
    >
      <Container className="d-flex flex-row ">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowLinks(!showLinks)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Row
              className={`w-100 ${
                showLinks ? "flex-column" : "justify-content-between"
              }`}
            >
              <Col
                xs={9}
                md={9}
                className={`d-flex ${
                  showLinks
                    ? "flex-column h-50"
                    : "flex-row justify-content-around"
                }`}
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link
                  className={`nav-link ${
                    location.pathname === "/offerte" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className={`nav-link ${
                    location.pathname === "/portfolio" ? "active" : ""
                  }`}
                  to="/portfolio"
                >
                  Portfolio
                </Link>

                <Link
                  className={`nav-link ${
                    location.pathname === "/contacts" ? "active" : ""
                  }`}
                  to="/contacts"
                >
                  Contacts
                </Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
