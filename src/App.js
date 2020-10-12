import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';

export default function App(props) {
   return (
      <>
         <Router basename='/'>
            <NavBar />
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/about' component={About} />
               <Route component={Home} />
            </Switch>
         </Router>
      </>
   );
}
