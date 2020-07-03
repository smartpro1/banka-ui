import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import TransferFund from "./components/TransferFund/TransferFund";
import jwtDecode from "jwt-decode";
import { setJwtToken } from "./securityUtils/setJwtToken";
import store from "./store";
import { LOGIN } from "./actions/types";
import { logoutAction } from "./actions/userActions";
import SecuredRoute from "./securityUtils/SecuredRoute";
import Dashboard from "./components/Dashboard/Dashboard";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJwtToken(jwtToken);
  const decodedToken = jwtDecode(jwtToken);
  store.dispatch({
    type: LOGIN,
    payload: decodedToken,
  });

  const currentTime = Date.now() / 1000;
  if (decodedToken.exp < currentTime) {
    store.dispatch(logoutAction());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Router>
      <div className="App">
        {
          // public Routes
        }
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>

      <Switch>
        <SecuredRoute exact path="/transfer-funds" component={TransferFund} />
      </Switch>
    </Router>
  );
}

export default App;
