import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { useState, createRef, useEffect } from "react";
import ParticlesManager from './Intro/ParticlesManager'
// imports Link from react-router-dom
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  // defines a reference to the NavBar Toggle button
  const navBarToggleRef = createRef<HTMLButtonElement>();
  const unsetExpanded = () => {
    if (expanded) {
      navBarToggleRef.current?.click();
    }
  };
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas")! as HTMLCanvasElement;
    canvas.width = Math.round(1.5 * window.innerWidth)
    canvas.height = Math.round(1.5 * window.innerHeight)
    canvas.style.height = window.innerHeight + "px";
    canvas.style.width = window.innerWidth + "px";

    const particlesManager = new ParticlesManager({
      canvas,
    });
    const update = () => {
      particlesManager.update();
      requestAnimationFrame(update);
    }
    update();
  },[])
  return (
  <>

    <canvas id="particle-canvas" style={{width: '100vw', height: '100vh'}}></canvas>
    <BrowserRouter>
      <Navbar
        bg="dark"
        expand="lg"
        style={{ color: "white" }}
        //className={`navbar-expand-${expanded ? "sm" : "lg"}`}
      >
        <Container
          style={{ maxWidth: "100vw", width: "100vw", color:'white' }}
        >
          <Navbar.Brand
            style={{ color: "white" }}
            onClick={unsetExpanded}
            as={Link}
            to="/about"
          >
            Giulio Zani
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ marginRight: "0px", color: "white" }}
            ref={navBarToggleRef}
            aria-controls="basic-navbar-nav"
            className={`${!expanded ? "" : "collapse"}`}
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${!expanded ? "" : "show"}`}
            style={{ color: "white" }}
          >
            <Nav className="me-auto">
              <Nav.Link
                style={{ color: "white" }}
                onClick={unsetExpanded}
                as={Link}
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                onClick={unsetExpanded}
                as={Link}
                to="/contact"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                onClick={unsetExpanded}
                as={Link}
                to="/projects"
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default BasicExample;
