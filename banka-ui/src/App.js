import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import TransferFund from "./components/TransferFund/TransferFund";
import jwtDecode from "jwt-decode";
import { setJwtToken } from "./securityUtils/SetJwtToken";

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
    store.dispatch(logoutAdmin());
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
      </div>

      <Switch>
        <SecuredRoute exact path="/dashboard" component={Dashboard} />
        <SecuredRoute exact path="/transfer-funds" component={TransferFund} />
      </Switch>
    </Router>
  );
}

export default App;
