import React from "react";
import { Link } from "react-router-dom";

export default function RegisterSuccess(props) {
  return (
    <div>
      <h1>Thank you for registering!</h1>
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
}
