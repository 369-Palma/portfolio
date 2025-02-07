import { Nav, Navbar, Row, Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {

  //States
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home")

  //Handlers
  const handleScrollToSection = (id) => {
    setSelectedLink(id)
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Effects
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contacts"];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setSelectedLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Navbar
      expand="md"
      className="navbar customNavbar navbar-expand-md navbar-dark fixed-top bg-black pb-3 ps-md-5 "
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowLinks(!showLinks)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Row className={`w-100 ${showLinks ? "flex-column" : "justify-content-between"}`}>
              <Col
                xs={9}
                md={9}
                className={`d-flex ${showLinks ? "flex-column h-50" : "flex-row justify-content-around"}`}
              >
                <a className={`${selectedLink === "home"? "nav-link-selected" : "nav-link"}  ${selectedLink === "home" ? "nav-link-selected" : ""}`} onClick={() => handleScrollToSection("home")}>
                  Home
                </a>
                <a className={`${selectedLink === "about"? "nav-link-selected" : "nav-link"} ${selectedLink === "about" ? "nav-link-selected" : ""}`} onClick={() => handleScrollToSection("about")}>
                  About
                </a>
                <a className={`${selectedLink === "portfolio"? "nav-link-selected" : "nav-link"} ${selectedLink === "portfolio" ? "nav-link-selected" : ""}`} onClick={() => handleScrollToSection("portfolio")}>
                  Portfolio
                </a>
                <a className={`${selectedLink === "contacts"? "nav-link-selected" : "nav-link"} ${selectedLink === "contacts" ? "nav-link-selected" : ""}`} onClick={() => handleScrollToSection("contacts")}>
                  Contacts
                </a>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
