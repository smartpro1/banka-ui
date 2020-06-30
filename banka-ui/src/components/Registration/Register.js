import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="register">
        <h1>Sign Up</h1>
        <h3>Create An Account</h3>
        <form className="registration-form">
          <div className="input-container">
            <input className="input-field" type="text" placeholder="fullname" />
          </div>

          <div className="input-container">
            <input
              className="input-field"
              type="radio"
              name="gender"
              placeholder="username"
            />
          </div>

          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="phone number"
            />
          </div>

          <div className="input-container">
            <input className="input-field" type="email" placeholder="email" />
          </div>

          <div className="input-container">
            <input className="input-field" type="text" placeholder="username" />
          </div>

          <div className="input-container">
            <input
              className="input-field"
              type="password"
              placeholder="password"
            />
          </div>

          <div className="input-container">
            <input
              className="input-field"
              type="password"
              placeholder="confirm password"
            />
          </div>

          <button type="submit" className="login-btn"></button>
        </form>
      </div>
    );
  }
}

export default Register;
