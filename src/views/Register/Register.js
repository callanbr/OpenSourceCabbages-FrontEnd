import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url } from "../../Global";
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

  const Title = styled.h1`
    color: #632c6b;
    text-align: center;
  `;
  const Subtitle = styled.h3`
    color: darkslategray;
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

  /*const LightButton = styled(Button)`
    color: rgb(15, 161, 32);
    background: whitesmoke;
  `;
*/
  const Form = styled.form`
    text-align: center;
    border: 1px solid black;
    margin-right: 300px;
    margin-left: 300px;
  `;

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
