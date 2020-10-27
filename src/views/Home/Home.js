import React, { useState, useEffect } from 'react';
import './Home.css';
import { Title } from '../../Global';
import AuthService from '../Login/AuthService';

let Auth = new AuthService();

export default function Home(props) {
   const [state, setState] = useState({
      loggedIn: Auth.loggedIn(),
      username: '',
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
      props.history.replace('/login');
   };

   return (
      <>
         <Title>Home Works</Title>
         <h1>Welcome {state.username}!</h1>
         <button onClick={handleLogout}>Logout</button>
      </>
   );
}
