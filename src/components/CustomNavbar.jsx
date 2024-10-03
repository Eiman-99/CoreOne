import search from "../assets/search.png";
import cart from "../assets/cart.png";
import login from "../assets/login.png";
import apple from "../assets/apple-logo.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";

function CustomNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`py-2 ${isScrolled ? "navbar-blur" : ""}`}
      style={{ margin: 0 }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home" className="logo">
            CoreOne
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 ">
            <Link to="/">
              <Nav.Link href="#features" className="mx-3 custom-style">
                Latest
              </Nav.Link>
            </Link>

            <Nav.Link href="#categories" className="mx-3">
              Categories
            </Nav.Link>

            <Link to="/about">
              <Nav.Link href="#g" className="mx-3">
                About
              </Nav.Link>
            </Link>
            <Link to="/support">
              <Nav.Link href="#v" className="mx-3">
                Support
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="nav-icons">
            <Nav.Link eventKey={2} href="#memes" className="mx-3">
              <img className="search" src={search} />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="mx-3">
              <img src={cart} />
            </Nav.Link>

            <NavDropdown
              title={<img src={login} />}
              id="collapsible-nav-dropdown"
              className="custom-dropdown mx-3"
            >
              <NavDropdown.Item href="#action/3.1" className="btn primary">
                Login
              </NavDropdown.Item>
              <p>Don't have an account?</p>
              <NavDropdown.Item href="#action/3.2" className="btn outline">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link
          eventKey={2}
          className="mx-3 premium d-none d-lg-flex"
          style={{ cursor: "default" }}
        >
          <img className="apple" src={apple} />
          <p className="custom-font">Premium Reseller</p>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
