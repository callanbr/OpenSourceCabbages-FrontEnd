import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/Navbar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import RegisterSuccess from "./views/Register/RegisterSuccess";
import Product from "./views/Product/Product";

export default function App(props) {
  return (
    <>
      <Router basename="/">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/success" component={RegisterSuccess} />
          <Route exact path="/product" component={Product} />
          <Route component={Login} />
        </Switch>
      </Router>
    </>
  );
}
