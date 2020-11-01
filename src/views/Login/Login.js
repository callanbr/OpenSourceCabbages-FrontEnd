import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Title, H3, DarkButton, Form, Section, Container } from "../../Global";
import AuthService from "./AuthService";
import "./Login.css";

export default function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    badLogin: "",
  });

  let Auth = new AuthService();

  useEffect(() => {
    if (Auth.loggedIn()) props.history.replace("/");
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Auth.login(state.username, state.password)
      .then((res) => {
        setTimeout(function () {
          props.history.replace("/");
          window.location.reload();
        }, 100);
      })
      .catch((err) => {
        setState({
          ...state,
          badLogin: <Title>Invalid username or password</Title>,
        });
      });
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
      <Container>
        <Title>Please Log in</Title>
        <Form onSubmit={handleFormSubmit}>
          <Section>
            <label htmlFor="username">Username: </label>
            <input
              style={{ marginLeft: "10px" }}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </Section>
          <Section>
            <label htmlFor="password">Password: </label>
            <input
              style={{ marginLeft: "10px" }}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Section>
          <Section>
            <Link className="centerLink" to="/register">
              Sign up
            </Link>
          </Section>
          {state.badLogin}
          <DarkButton name="logIn" type="submit" color="dark" size="sm">
            Log in
          </DarkButton>
        </Form>
        <br />
        <H3>-or-</H3>
        <br />
        <H3>
          <Link to="/home" className="centerLink">
            Continue as a Guest
          </Link>
        </H3>
      </Container>
    </>
  );
}
