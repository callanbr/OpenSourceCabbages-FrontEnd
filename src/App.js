import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Register from './views/Register/Register';
import RegisterSuccess from './views/Register/RegisterSuccess';
import Product from './views/Product/Product';
import Login from './views/Login/Login';
import Footer from './components/Footer/Footer';
import Cart from './views/Cart/Cart';

export default function App(props) {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Router basename='/'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/success' component={RegisterSuccess} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/cart' component={Cart} />
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
