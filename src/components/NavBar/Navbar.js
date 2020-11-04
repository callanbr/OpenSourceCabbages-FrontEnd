import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../Logo/Logo.png';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { DarkButton } from '../../Global';
import AuthService from '../../views/Login/AuthService';
let Auth = new AuthService();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props) {
  const [state, setState] = useState({
    displayLogin: '',
  });

  useEffect(() => {
    if (Auth.loggedIn()) {
      setState({
        ...state,
        displayLogin: (
          <Link to='/login' onClick={handleLogout} className='link'>
            Logout
          </Link>
        ),
      });
    } else {
      setState({
        ...state,
        displayLogin: (
          <Link to='/login' className='link'>
            Login
          </Link>
        ),
      });
    }
  }, []);
  const handleLogout = () => {
    let confirm = window.confirm('Logout?');
    if (confirm) {
      Auth.logout();
      setState({
        ...state,
        displayLogin: (
          <Link to='/login' className='link'>
            Login
          </Link>
        ),
      });
      // props.history.replace("/login");
      // change logout to login
    }
  };
  return (
    <>
      <Navbar collapseOnSelect expand='lg' fixed='top' className='color-nav'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Link to='/' className='link'>
          <img src={logo} width='120' height='50'></img>
        </Link>
        <Nav className='navbar-nav ml-auto'>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Link to='/about' className='link'>
              About
            </Link>
            <Link to='/register' className='link'>
              Register
            </Link>
            <Link to='/product' className='link'>
              Product
            </Link>
            <Link to='/cart' className='link'>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            {state.displayLogin}
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </>
  );
}
