import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title, Subtitle, DarkButton, Form, Section } from "../../Global";

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
      <Title>Please Log in</Title>
      <Form onSubmit={handleFormSubmit}>
        <Section>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </Section>
        <Section>
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Password"
            onChange={handleChange}
          />
        </Section>
        <Section>
          <Link to="/register" className="link">
            Sign up
          </Link>
        </Section>

        <DarkButton name="logIn" type="submit" color="dark" size="sm">
          Log in
        </DarkButton>
      </Form>

      <Subtitle>-or-</Subtitle>
      <Subtitle>
        <Link to="/home" className="link">
          Continue as a Guest
        </Link>
      </Subtitle>
    </>
  );
}
