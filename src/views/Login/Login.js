import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title, Subtitle, DarkButton, Form, Section } from '../../Global';
import AuthService from './AuthService';

export default function Login(props) {
   const [state, setState] = useState({
      username: '',
      password: '',
      badLogin: '',
   });

   let Auth = new AuthService();

   useEffect(() => {
      if (Auth.loggedIn()) props.history.replace('/');
   }, []);

   const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log(
         'Username: ' + state.username + '. Password: ' + state.password
      );
      Auth.login(state.username, state.password)
         .then((res) => {
            setTimeout(function () {
               props.history.replace('/');
            }, 100);
         })
         .catch((err) => {
            // console.log('LOGIN FAILED', err);
            setState({
               ...state,
               badLogin: (
                  <h1 style={{ color: 'rgb(205,109,95)', fontSize: '1em' }}>
                     Invalid username or password
                  </h1>
               ),
            });
         });
   };

   const handleChange = (e) => {
      const value = e.target.value;
      setState({
         ...state,
         [e.target.name]: value,
      });
   };

   return (
      <>
         <Title>Please Log in</Title>
         <Form onSubmit={handleFormSubmit}>
            <Section>
               <label htmlFor='username'>Username: </label>
               <input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Username'
                  onChange={handleChange}
               />
            </Section>
            <Section>
               <label htmlFor='password'>Password:</label>
               <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
               />
            </Section>
            <Section>
               <Link to='/register' className='link'>
                  Sign up
               </Link>
            </Section>
            {state.badLogin}
            <DarkButton name='logIn' type='submit' color='dark' size='sm'>
               Log in
            </DarkButton>
         </Form>

         <Subtitle>-or-</Subtitle>
         <Subtitle>
            <Link to='/home' className='link'>
               Continue as a Guest
            </Link>
         </Subtitle>
      </>
   );
}
