import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url, Title, Subtitle, DarkButton, Form } from "../../Global";
import styled from "styled-components";

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
      <Title>Registration Page</Title>
      <Subtitle>Fill out the form below and click submit.</Subtitle>
      <div className="Form">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
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
          <DarkButton dark type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </DarkButton>
        </Form>
      </div>
    </div>
  );
}
