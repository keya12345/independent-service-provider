import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../image/logo/logo-1.png";
const Header = () => {
  return (
    <>
      <div className="nav-container">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container className="d-flex">
            <div>
              {" "}
              <Navbar.Brand as={Link} to="/">
                <img height={50} width={100} src={logo} alt="" />
              </Navbar.Brand>
            </div>
            <div>
              <Nav className="me-auto">
                <button>Booking Now</button>
              </Nav>
            </div>
          </Container>
        </Navbar>

        <Navbar bg="primary" variant="dark" sticky="top">
          <Container className="d-flex">
            <div>
              {" "}
              <Navbar.Brand as={Link} to="/">
                <h2> Photographer</h2>
              </Navbar.Brand>
            </div>
            <div>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
