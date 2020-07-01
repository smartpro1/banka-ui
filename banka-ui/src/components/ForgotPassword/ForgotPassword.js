import React, { Component } from "react";

import "./ForgotPassword.css";
class ForgotPassword extends Component {
  render() {
    return (
      <div className="signup">
        <div className="signup-logo">
          <h3>
            <a href="/">
              Banka&nbsp;
              <i className="fa fa-university logo-icon" aria-hidden="true"></i>
            </a>
          </h3>
        </div>
        <h2 id="signup-h2" className="fgt-password">
          Reset Password
        </h2>
        <form className="">
          <div className="signup-container">
            <input
              className="signup-input"
              type="email"
              placeholder="enter your valid email to reset password"
              required
            />
          </div>
          <button type="submit" className="register-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
