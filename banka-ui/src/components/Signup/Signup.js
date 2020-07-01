import React, { Component } from "react";

import "./Signup.css";
class Register extends Component {
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
        <h2 id="signup-h2">Sign Up</h2>
        <h4>Create An Account</h4>
        <form className="signup-form">
          <div className="signup-container">
            <input
              className="signup-input"
              type="text"
              placeholder="fullname"
            />
          </div>

          <div className="signup-container radio">
            <h3>Select gender</h3>
            <label htmlFor="male" className="label-gender">
              male
              <input type="radio" name="sex" id="male" />
            </label>
            <label htmlFor="female" className="label-gender">
              female
              <input type="radio" name="sex" id="female" />
            </label>

            <label htmlFor="others" className="label-gender">
              others
              <input type="radio" name="sex" id="others" />
            </label>
          </div>
          <div className="signup-container">
            <input
              className="signup-input"
              type="text"
              placeholder="phone number"
            />
          </div>

          <div className="signup-container">
            <input className="signup-input" type="email" placeholder="email" />
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="text"
              placeholder="username"
            />
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="password"
              placeholder="password"
            />
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="password"
              placeholder="confirm password"
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

export default Register;
