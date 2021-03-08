import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import History from "./components/utils";
import LandingPage from "./components/landingPage";
import SignUp from "./components/signUp";
import LogIn from "./components/LogIn";
import "./App.scss";

function App() {
  return (
    <>
      <Router History={History}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
