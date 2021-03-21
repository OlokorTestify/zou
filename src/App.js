import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import History from "./components/utils";
import LandingPage from "./components/landingPage";
import SignUp from "./components/signUp";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import "./App.scss";

function App() {
  return (
    <>
      <Router history={History}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
