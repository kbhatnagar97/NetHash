import React from "react";
import { Login } from "../src/Screens/Login/Login";
import { SignUp } from "../src/Screens/SignUp/SignUp";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
