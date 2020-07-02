import React, { Component } from "react";

import "./Login.css";

class Login extends Component {
  state = {
    translateContainer: false,
  };

  translateContainer = () => {
    this.setState({
      translateContainer: !this.state.translateContainer,
    });
  };
  render() {
    let translate = "extra-container";
    let info = "?";
    if (this.state.translateContainer) {
      translate = "extra-container translate";
      info = <i class="fa fa-lightbulb-o" aria-hidden="true"></i>;
    }
    return (
      <div className="login">
        <div className="login-header">
          <div className="login-notification">
            <i className="fa fa-bell-o" aria-hidden="true"></i>
            <p>notifications</p>
          </div>
          <div className="login-logo">
            <h1>
              Banka&nbsp;
              <i className="fa fa-university logo-icon" aria-hidden="true"></i>
            </h1>
          </div>
        </div>

        <form className="login-form">
          <div className="form-wrapper">
            <div className="input-container">
              <i className="fa fa-user-o icon" aria-hidden="true"></i>
              <input
                className="input-field"
                type="text"
                placeholder="username"
              />
            </div>

            <div className="input-container">
              <i className="fa fa-lock icon" aria-hidden="true"></i>
              <input
                className="input-field"
                type="password"
                placeholder="password"
                name="psw"
              />
            </div>
            {
              <div className="input-container">
                <input
                  className="remember-me"
                  type="checkbox"
                  placeholder="Password"
                  name="remember-me"
                  id="remember-me"
                />
                <label htmlFor="remember-me" id="checkbox-label">
                  Remember me
                </label>
              </div>
            }
          </div>
          <button type="submit" className="login-btn">
            <i className="fa fa-sign-in" aria-hidden="true"></i>
          </button>
        </form>

        <div className={translate} onClick={this.translateContainer}>
          <div className="login-extra">
            <a href="/forgot-password">
              <i className="fa fa-unlock" aria-hidden="true">
                {" "}
                sign up
              </i>
            </a>
            <br />
            &nbsp;
            <a href="/reset-password">
              <i className="fa fa-history" aria-hidden="true">
                {" "}
                &nbsp; forgot password?
              </i>
            </a>
          </div>
          <div className="show-extra">{info}</div>
        </div>
      </div>
    );
  }
}

export default Login;
