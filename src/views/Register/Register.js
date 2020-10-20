import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import Button from "../../components/Button/Button";
import axios from "axios";
import { url } from "../../Global";

export default function Register(props) {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    axios
      .post(`${url}/user`, {
        username: data.username,
        password: data.password,
      })
      .then(props.history.push("/success"));
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="Register">
      <h1>Registration Page</h1>
      <h3>Fill out the form below and click submit.</h3>
      <div className="Form">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h4>Please enter a username below</h4>
          <input
            name="username"
            type="text"
            placeholder="Username"
            ref={register({ required: true })}
          />
          {errors.username && "You must choose a username"}

          <div className="passwrapper">
            <h4>Please enter a password</h4>
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ minLength: 8, required: true })}
            />
            {errors.password && "Password must contain at least 8 characters"}
          </div>
          <Button
            type="submit"
            color="dark"
            size="sm"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
