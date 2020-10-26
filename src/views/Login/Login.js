import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  const Title = styled.h1`
    color: #632c6b;
    text-align: center;
  `;
  const DarkButton = styled.button`
    background: rgb(15, 161, 32);
    color: whitesmoke;
    padding: 4px;
    margin: 15px 5px;
    border-radius: 4px;
    transition: 0.25s all ease-out;
    box-shadow: 0 2px 2px 0 rgba(51, 51, 51, 0.14),
      0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12);

    &:hover {
      background-color: rgb(74, 74, 150);
      color: whitesmoke;
    }
  `;

  const Form = styled.form`
    text-align: center;
    border: 1px solid black;
    margin-right: 300px;
    margin-left: 300px;
  `;

  const Subtitle = styled.h3`
    color: darkslategray;
    text-align: center;
  `;

  const Section = styled.section`
    padding: 10px;
  `;

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
