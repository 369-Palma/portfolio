import { Nav, Navbar, Row, Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Navbar expand="md" className="bg-body-tertiary d-flex mb-3">
      <Container className="d-flex flex-row align-self-center">
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
    /*  <Nav
      className="navBar w-75 mx-auto flex-nowrap"
      variant="pills"
      defaultActiveKey="/"
    >
      <Nav.Item className="spaziaturaLink">
        <Link to="/">HOME </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" eventKey="link-1">
          ABOUT
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/porfolio" eventKey="link-2">
          WORKS
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contacts" eventKey="link-3">
          CONTACTS
        </Link>
      </Nav.Item>
    </Nav> */
  );
};
export default NavBar;
