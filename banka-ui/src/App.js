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
import ForgotPin from "./components/ForgotPin/ForgotPin";
import ChangePin from "./components/ChangePin/ChangePin";
import UserProfile from "./components/UserProfile/UserProfile";
import UserGuide from "./components/UserGuide/UserGuide";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { ConfirmReg } from "./components/ConfirmRegistration/ConfirmReg";
import DummyAccounts from "./components/DummyAccounts/DummyAccounts";
import TransferSuccess from "./components/TransferStatus/TransferSuccess";
import RegistrationSuccessful from "./components/ConfirmRegistration/RegistrationSuccessful";
import ChangePinSuccessful from "./components/ConfirmRegistration/ChangePinSuccessful";
import ForgotPinSuccessful from "./components/ConfirmRegistration/ForgotPinSuccessful";
import ForgotPasswdSuccessful from "./components/ConfirmRegistration/ForgotPasswdSuccessful";
import ResetPasswdSuccessful from "./components/ConfirmRegistration/ResetPasswdSuccessful";
import {SessionTimeOut} from "./components/Session/SessionTimeout";

import {inactiveSessionTimeout} from "./actions/userActions";


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

inactiveSessionTimeout();

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
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route path="/password-reset" component={ResetPassword} />
        <Route path="/confirm-registration" component={ConfirmReg} />
        <Route path="/reg-successful" component={RegistrationSuccessful} />
        <Route path="/forgot-pin-successful" component={ForgotPinSuccessful}/>
        <Route path="/forgot-passwd-successful" component={ForgotPasswdSuccessful} />
        <Route path="/reset-passwd-successful" component={ResetPasswdSuccessful} />
        <Route path="/session-timeout" component={SessionTimeOut} /> 
        
        {/*<Route exact path="/transfer-success" component={TransferSuccess} /> */}
        
        <Switch>
          <SecuredRoute exact path="/change-pin" component={ChangePin} />
          <SecuredRoute exact path="/forgot-pin" component={ForgotPin} />
          <SecuredRoute exact path="/transfer-funds" component={TransferFund} />
          <SecuredRoute exact path="/dashboard" component={Dashboard} />
          <SecuredRoute exact path="/profile" component={UserProfile} />
          <SecuredRoute exact path="/transfer-success" component={TransferSuccess} />
          <SecuredRoute exact path="/change-pin-success" component={ChangePinSuccessful} />
          <SecuredRoute
            exact
            path="/dummy-accounts"
            component={DummyAccounts}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
