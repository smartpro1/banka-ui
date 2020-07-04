import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { loginAction } from "../../actions/userActions";
import "./Login.css";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isLoading: false,
      translateContainer: false,
      errors: {},
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { username, password } = this.state;

    const userCredentials = {
      username,
      password,
    };
    const { loginAction, history } = this.props;
    loginAction(userCredentials, history);
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        isLoading: false,
      });
    }
  };

  translateContainer = () => {
    this.setState({
      translateContainer: !this.state.translateContainer,
    });
  };

  render() {
    const { username, password, isLoading, errors } = this.state;

    let translate = "extra-container";
    let handIcon = (
      <p className="login-info">
        To signup or reset password click the hand icon below
      </p>
    );
    let info = <i className="fa fa-hand-o-left" aria-hidden="true"></i>;
    if (this.state.translateContainer) {
      translate = "extra-container translate";
      info = <i className="fa fa-lightbulb-o" aria-hidden="true"></i>;
      handIcon = "";
    }

    let isLoader = (
      <button type="submit" className="login-btn">
        <i className="fa fa-sign-in" aria-hidden="true"></i>
      </button>
    );

    if (isLoading) {
      isLoader = <LoadSpinner />;
    }

    let displayErrorMessage = "";

    if (errors.credential || errors.username || errors.password) {
      displayErrorMessage = (
        <div className="login-err-mesg">
          {" "}
          <i className="fa fa-bell-slash-o" aria-hidden="true"></i>{" "}
          &nbsp;invalid username or password
        </div>
      );
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

        {displayErrorMessage}
        <form className="login-form" onSubmit={this.handleOnSubmit}>
          <div className="form-wrapper">
            <div className="input-container">
              <i className="fa fa-user-o icon" aria-hidden="true"></i>
              <input
                className="input-field"
                type="text"
                placeholder="username"
                name="username"
                onChange={this.handleOnChange}
                value={username}
                required
              />
            </div>

            <div className="input-container">
              <i className="fa fa-lock icon" aria-hidden="true"></i>
              <input
                className="input-field"
                type="password"
                placeholder="password"
                onChange={this.handleOnChange}
                name="password"
                value={password}
                required
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
          {isLoader}
        </form>

        {handIcon}
        <div className={translate} onClick={this.translateContainer}>
          <div className="login-extra">
            <Link to="/signup">
              <i className="fa fa-unlock" aria-hidden="true">
                {" "}
                sign up
              </i>
            </Link>

            <Link to="/forgot-password" className="login-extra-space">
              <i className="fa fa-history" aria-hidden="true">
                {" "}
                &nbsp; forgot password?
              </i>
            </Link>

            <Link to="/user-guide">
              <i className="fa fa-book" aria-hidden="true">
                {" "}
                &nbsp; user guide
              </i>
            </Link>
          </div>
          <div className="show-extra">{info}</div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { loginAction })(Login);
