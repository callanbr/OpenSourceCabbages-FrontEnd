import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { DiJava } from "react-icons/di";

export default function NavBar(props) {
  return (
    <>
      <DiJava />
      <Link to="/" className="link">
        Home
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
