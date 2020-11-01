import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url, Title, H4, H5, DarkButton, Form, Container } from "../../Global";

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
    <Container>
      <div className="Register">
        <Title>Registration Page</Title>
        <H5>Fill out the form below and click submit.</H5>
        <div className="Form">
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <H4>Please enter a username below</H4>
            <input name="username" type="text" placeholder="Username" ref={register({ required: true })} />
            <H5>* Required</H5>
            <br />
            {errors.username && "You must choose a username"}
            <div className="passwrapper">
              <H4>Please enter a password</H4>

              <input
                name="password"
                type="password"
                placeholder="Password"
                ref={register({ minLength: 8, required: true })}
              />
              <H5>* Must be at least 8 characters</H5>
              {errors.password && "Password must contain at least 8 characters"}
            </div>
            <DarkButton dark type="submit" onClick={handleSubmit(onSubmit)}>
              Submit
            </DarkButton>
          </Form>
        </div>
      </div>
    </Container>
  );
}
