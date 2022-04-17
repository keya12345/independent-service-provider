import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../image/logo/logo-1.png";
import app from "../../../firebase.init";
const Header = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
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

      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h2>PHOTOGRAPHER</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services" className="fs-5 fw-normal ">
                Services
              </Nav.Link>
              <Nav.Link href="home#experts" className="fs-5 fw-normal ">
                OutdoorPhotos
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about" className="fs-5 fw-normal ">
                About
              </Nav.Link>
              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none fs-5 fw-normal"
                  onClick={handleSignOut}
                >
                  sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="login" className="fs-5 fw-normal ">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
