import React from "react";
import "./App.css";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import TransferFund from "./components/TransferFund/TransferFund";

function App() {
  return (
    <div className="App">
      {
        //<Login />
        //<Signup />
        //<ForgotPassword />
      }
      <TransferFund />
    </div>
  );
}

export default App;
