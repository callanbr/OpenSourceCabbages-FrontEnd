import React from 'react';
import { useForm } from "react-hook-form";
import './Register.css';


export default function Register(props) {

  const { register, errors, handleSubmit, unregister } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

    return (
       <div className="Register">
         <h1>Registration Page</h1>
        <h3>Fill out the form below and click submit.</h3>
         <div className="Form"> 
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <h4>Please enter a username below</h4>
            <input name="username" type ="text" placeholder="Username" ref={register({required: true})} />
            {errors.username && "You must choose a username"}

            <div className="passwrapper">
            <h4>Please enter a password</h4>
            <input name="password" type="password" placeholder="Password" ref={register({minLength: 8, required: true})} />
            {errors.password && "Password must contain at least 8 characters"}
            </div>
            <br />
            <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
            <br />
            <br />
            <br />
            <br />
            <button type="button" onClick={() => unregister("username")}>Click Here to Unregister</button>
        </form>
          </div>
         
       </div>
    );
}