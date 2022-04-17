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

        <Navbar bg="primary" variant="dark">
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
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
