import React from "react";
import { Login } from "../src/Screens/Login/Login";
import { SignUp } from "../src/Screens/SignUp/SignUp";
import { Dashboard } from "../src/Screens/Dashboard/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <div className="App">
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={SignUp} />
            <Route path="/dashboard" exact component={Dashboard} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
