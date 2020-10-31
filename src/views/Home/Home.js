import React, { useState, useEffect } from "react";
import "./Home.css";
import { Title, Container, H3, H4, H5, Section } from "../../Global";
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
        <Title>Open Source Cabbages E-Commerce Website</Title>
        <H3>Welcome {state.username}!</H3>
        <H5>All The Coolest Products Available With The Click of a Button</H5>
        <br />

        <Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit. Platea dictumst
            quisque sagittis purus. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum.
            Risus feugiat in ante metus. Sagittis purus sit amet volutpat. Sit amet est placerat in egestas
            erat imperdiet. Id diam maecenas ultricies mi eget mauris pharetra et. Aliquet porttitor lacus
            luctus accumsan tortor posuere ac ut consequat. Mauris a diam maecenas sed enim ut sem. Neque
            ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Pulvinar mattis nunc sed
            blandit libero volutpat sed.{" "}
          </p>
          <H4>Featured Item</H4>
        </Section>
      </Container>
    </>
  );
}
