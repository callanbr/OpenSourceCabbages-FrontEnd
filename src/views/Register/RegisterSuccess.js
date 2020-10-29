import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../../Global";

export default function RegisterSuccess(props) {
  return (
    <div>
      <Title>Thank you for registering!</Title>
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
}
