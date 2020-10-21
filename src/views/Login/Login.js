import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const [state, setState] = useState({
    username: "",
    pwd: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Username: " + state.username + ". Password: " + state.pwd);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <h1> Please Log in</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <Link to="/register" className="link">
            Sign up
          </Link>
        </div>
        <button name="logIn" type="submit">
          Log in
        </button>
      </form>
      <h3>-or-</h3>
      <h2>
        <Link to="/home" className="link">
          Continue as a Guest
        </Link>
      </h2>
    </>
  );
}
