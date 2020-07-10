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
import ForgotPIn from "./components/ForgotPin/ForgotPin";
import ChangePin from "./components/ChangePin/ChangePin";
import UserProfile from "./components/UserProfile/UserProfile";
import UserGuide from "./components/UserGuide/UserGuide";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { ConfirmRegistration } from "./components/ConfirmRegistration/ConfirmRegistration";

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
        <Route exact path="/user-guide" component={UserGuide} />

        <Route path="/confirm-registration" component={ConfirmRegistration} />
      </div>

      <Switch>
        <SecuredRoute path="/password-reset" component={ResetPassword} />
        <SecuredRoute exact path="/change-pin" component={ChangePin} />
        <SecuredRoute exact path="/forgot-pin" component={ForgotPIn} />
        <SecuredRoute
          exact
          path="/forgot-password"
          component={ForgotPassword}
        />
        <SecuredRoute exact path="/dashboard" component={Dashboard} />
        <SecuredRoute exact path="/profile" component={UserProfile} />
        <SecuredRoute exact path="/transfer-funds" component={TransferFund} />
      </Switch>
    </Router>
  );
}

export default App;
