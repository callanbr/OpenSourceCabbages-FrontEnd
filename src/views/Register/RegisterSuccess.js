import React from "react";
import { Link } from "react-router-dom";
import { Title, Container, Section } from "../../Global";
import "./Success.css";

export default function RegisterSuccess(props) {
  return (
    <Container>
      <Title>Thank you for registering!</Title>
      <Section>
        <Link className="successLink" to="/login">
          Go to Login Page
        </Link>
      </Section>
    </Container>
  );
}
