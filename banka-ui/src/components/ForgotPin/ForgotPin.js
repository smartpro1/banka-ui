import React, { Component } from "react";

class ForgotPIn extends Component {
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
          Reset Pin
        </h2>
        <form className="forgot-pin">
          <div className="signup-container">
            <input
              className="signup-input"
              type="email"
              placeholder="enter your valid email to reset pin"
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

export default ForgotPIn;
