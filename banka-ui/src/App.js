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
import CashierAdminRoute from "./securityUtils/CashierAdminRoute";
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
import Error404 from "./components/Error404/Error404";
import ResetPasswdSuccessful from "./components/ConfirmRegistration/ResetPasswdSuccessful";
import {SessionTimeOut} from "./components/Session/SessionTimeout";
import Withdrawal from "./components/Admin/Withdrawal/Withdrawal";
import Deposit from "./components/Admin/Deposit/Deposit";
import Operation from  "./components/Admin/Operation/Operation";
import {inactiveSessionTimeout} from "./actions/userActions";
import AdminDashboard from "./components/Admin/Dashboard/Dashboard";
import TrackedTransactions from "./components/Admin/TrackedTransactions/TrackedTransactions";
import TrackTransactions from "./components/Admin/TrackTransactions/TrackTransactions";
import ConfirmRegistration from "./components/ConfirmRegistration/ConfirmRegistration";

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
  let appClass = "App";
  const pathname = window.location.pathname.substr(1);
  const adminPaths = ['admin-dashboard', 'deposit', 'withdrawal', 'operation', 'transaction', 'admin-sidebar', 'tracked-transactions',
      'track-transactions'
  ];
  const isAdminPath = adminPaths.includes(pathname);

  /**
   * The admin urls will be large screen only, this helps us to break out of the default small screen
   * for other urls
   */
  if (isAdminPath) {
      appClass+=" admin-app";
     // document.body.style.backgroundImage = "";
  }
  
  return (
    <Router>
      <div className={appClass}>
        {
          // public Routes
        }
        
        <Switch>
       {/* <Route exact path="/" component={Login} /> */}
        <CashierAdminRoute exact path="/admin-dashboard" component={AdminDashboard}/> 
        <CashierAdminRoute exact path="/tracked-transactions" component={TrackedTransactions}/> 
        <CashierAdminRoute exact path="/tracked-transaction" component={TrackTransactions}/> 
        <CashierAdminRoute exact path="/withdrawal" component={Withdrawal} />
        <CashierAdminRoute exact path="/deposit" component={Deposit} />

        {/* AuthenticatedUserRoute  - /dashboard, /profile, /transfer-funds, /transfer-success */ }
        {/* AnyAuthenticatedPersonRoute - /change-pin, /forgot-pin,  */}

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
        <Route exact path="/session-timeout" component={SessionTimeOut} /> 
        {/* <Route exact path="/admin-dashboard" component={AdminDashboard} />
         <Route exact path="/withdrawal" component={Withdrawal} />
      <Route exact path="/deposit" component={Deposit} /> */}
        
        {/*<Route exact path="/pagination" component={Pagination} /> */}
        {/*<Route exact path="/transfer-success" component={TransferSuccess} /> */}
        {/*<Route exact path="/tracked-transactions" component={TrackedTransactions} />
         <Route exact path="/track-transactions" component={TrackTransactions} />
    <Route exact path="/test" component={ConfirmRegistration} /> */}
        
        
        
        {/*<CashierAdminRoute exact path="admin-dashboard" component={AdminDashboard}/> */} 
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
