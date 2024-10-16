import search from "../assets/search.png";
import cart from "../assets/cart.png";
import login from "../assets/login.png";
import apple from "../assets/apple-logo.png";
import profile from "../assets/profile.png";
import favs from "../assets/star.png";
import orders from "../assets/package.png";
import exit from "../assets/logout.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../utilities";
import Search from "./Search";
import { useCart } from "../context/CartContext";
import Badge from "react-bootstrap/Badge";

function CustomNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { isLoggedIn, logout } = useContext(AuthContext);

  const { cartItems } = useCart();
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

  function handleSearchClick() {
    setShowSearch(true);
    document.body.style.overflow = "hidden";
  }

  function handleCloseSearch() {
    setShowSearch(false);
    document.body.style.overflow = "auto";
  }
  return (
    <>
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
              <Nav.Link
                href="#memes"
                className="mx-3"
                onClick={handleSearchClick}
              >
                <img className="search" src={search} />
              </Nav.Link>
              <Link to="/cart">
                <Nav.Link href="#memes" className="mx-3">
                  <img src={cart} />

                  {cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cartItems.length}
                    </Badge>
                  )}
                </Nav.Link>
              </Link>

              {!isLoggedIn ? (
                <NavDropdown
                  title={<img src={login} />}
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown mx-3"
                >
                  <Link to="/login">
                    <NavDropdown.Item
                      href="#action/3.1"
                      className="btn primary"
                    >
                      Login
                    </NavDropdown.Item>
                  </Link>
                  <p>Don't have an account?</p>
                  <Link to="/signup">
                    <NavDropdown.Item
                      href="#action/3.2"
                      className="btn outline"
                    >
                      Sign Up
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title={<img src={login} />}
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown loggedIn mx-3"
                >
                  <Link to="/profile">
                    <NavDropdown.Item
                      href="#action/3.1"
                      className="loggedIn-links"
                    >
                      <img src={profile} alt="" />
                      My Account
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/favs">
                    <NavDropdown.Item
                      href="#action/3.1"
                      className="loggedIn-links"
                    >
                      <img src={favs} alt="" />
                      Favourites
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/orders">
                    <NavDropdown.Item
                      href="#action/3.1"
                      className="loggedIn-links"
                    >
                      <img src={orders} alt="" />
                      orders
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/">
                    <NavDropdown.Item
                      href="#action/3.1"
                      className="loggedIn-links border-none"
                      onClick={logout}
                    >
                      <img src={exit} alt="" />
                      Logout
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              )}
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
      <Search show={showSearch} close={handleCloseSearch} />
    </>
  );
}

export default CustomNavbar;
