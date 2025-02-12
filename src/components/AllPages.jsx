import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Contacts from "./Contacts";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";
import NavBar from "./NavBar";
import { useEffect, useRef, useState } from "react";

const AllPages = () => {

  const [currentPage, setCurrentPage] = useState("home");

  // Creiamo le referenze per le sezioni
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    contacts: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: "0px",
      threshold: currentPage === "home"? 0.5 : 0.3, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.id);
          console.log("current page: ", entry.target.id )
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

  /* useEffect(()=>{
    if(!currentPage !== "home") return
  window.location.reload()}, [currentPage]) */


  return (
    <Container className="w-full mt-4">
      <NavBar />
      <Row clasName="link-list d-flex flex-column justify-content-center align-items-center ">
        <Col xs={12} id="home" ref={sectionsRef.home}>
          <HomePage currentPage={currentPage}/>
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
