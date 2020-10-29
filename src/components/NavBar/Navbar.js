import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { DiJava } from "react-icons/di";
import logo from "../../Logo/Logo.png";

export default function NavBar(props) {
  return (
    <>
      <img src={logo} width="120" height="50"></img>
      <Link to="/" className="link">
        Home <DiJava />
      </Link>
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
    </>
  );
}
