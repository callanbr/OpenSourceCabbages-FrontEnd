import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(props) {
   return (
      <>
         <Link to='/' className='link'>
            Home
         </Link>
         <Link to='/about' className='link'>
            About
         </Link>
         <Link to='/space' className='link'>
            Space
         </Link>
      </>
   );
}
