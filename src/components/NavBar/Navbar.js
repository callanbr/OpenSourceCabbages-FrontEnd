import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../Logo/Logo.png";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export default function NavBar(props) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="color-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Link to="/" className="link">
          <img src={logo} width="120" height="50"></img>
        </Link>
        <Nav className="navbar-nav ml-auto">
          <Navbar.Collapse id="basic-navbar-nav">
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/register" className="link">
              Register
            </Link>
            <Link to="/product" className="link">
              Product
            </Link>
            <Link to="/login" className="link">
              Login
            </Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </>
  );
}
