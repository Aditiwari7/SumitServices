import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRef } from "react";
import ScrollToTop from "./slidetotop";
import AboutSec from "./about";
import ContactSec from "./contact";
// import 'bootstrap/dist/css/bootstrap.min.css';

function navbar() {
  const about = useRef(null);
  const contact = useRef(null);

  const scrollSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar expand="lg" className="" style={{ padding: 1.5, height: 80 }}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: 35 }}>
            Sumit Services
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            class="d-flex"
            style={{ fontSize: 20 }}
          >
            <Nav className="me-auto text-end">
              <Nav.Link href="#home" className="text-end">
                Home
              </Nav.Link>
              <Nav.Link onClick={() => scrollSection(about)}>About</Nav.Link>
              <Nav.Link onClick={() => scrollSection(contact)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div ref={about} className="about">
        <AboutSec />
      </div>
      <div ref={contact} className="contact">
        <ContactSec />
      </div>
    </div>
  );
}

export default navbar;
// class="d-flex"
