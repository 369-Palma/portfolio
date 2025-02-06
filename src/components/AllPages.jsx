import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Contacts from "./Contacts";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";
import NavBar from "./NavBar";
import { useEffect, useRef, useState } from "react";

const AllPages = () => {

  const [currentPage, setCurrentPage] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  // Creiamo le referenze per le sezioni
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    contacts: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Usa il viewport
      rootMargin: "0px",
      threshold: 0.5, // Quando almeno il 50% della sezione è visibile
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Osserviamo ogni sezione
    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionsRef).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Container style={{width:"100%"}}>
      <NavBar />
      <Row clasName="d-flex flex-column justify-content-center align-items-center ">
        <Col xs={12} id="home">
          <HomePage isScrolling={isScrolling} currentPage={currentPage}/>
        </Col>
        <Col xs={12} id="about" className="my-5" ref={sectionsRef.about}>
          <About />
        </Col>
        <Col xs={12} id="portfolio" ref={sectionsRef.portfolio}>
          <Portfolio />
        </Col>
        <Col xs={12} id="contacts" ref={sectionsRef.contacts}>
          <Contacts />
        </Col>
      </Row>
    </Container>
 
  );
};

export default AllPages;
