import React, { useState, useEffect } from "react";
import "./Home.css";
import { Title, DarkButton, Container, H3 } from "../../Global";
import AuthService from "../Login/AuthService";

let Auth = new AuthService();

export default function Home(props) {
  const [state, setState] = useState({
    loggedIn: Auth.loggedIn(),
    username: "",
  });

  useEffect(() => {
    // let value = Auth.getProfile().sub;
    if (Auth.loggedIn()) {
      setState({
        ...state,
        username: Auth.getProfile().sub,
      });
    }
  }, []);

  const handleLogout = () => {
    Auth.logout();
    props.history.replace("/login");
  };

  return (
    <>
      <Container>
        <Title>Home Works</Title>
        <H3>Welcome {state.username}!</H3>
        <DarkButton onClick={handleLogout}>Logout</DarkButton>
      </Container>
    </>
  );
}
