import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Signup.css";
import { signupAction } from "../../actions/userActions";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      fullname: "",
      sex: "",
      phoneNumber: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      isLoading: false,
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
    const {
      fullname,
      sex,
      phoneNumber,
      email,
      username,
      password,
      confirmPassword,
    } = this.state;

    const userDetails = {
      fullname,
      sex,
      phoneNumber,
      email,
      username,
      password,
      confirmPassword,
    };
    const { signupAction, history } = this.props;
    signupAction(userDetails, history);
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        isLoading: false,
      });
    }
  };

  render() {
    const {
      fullname,
      sex,
      phoneNumber,
      email,
      username,
      password,
      confirmPassword,
      isLoading,
      errors,
    } = this.state;

    let isLoader = (
      <button type="submit" className="register-btn">
        Submit
      </button>
    );
    let isLoaderClass = "signup";

    if (isLoading) {
      isLoader = (
        <div id="logo-spinner">
          Banka&nbsp;
          <i className="fa fa-university logo-icon" aria-hidden="true"></i>
        </div>
      );
      isLoaderClass = "signup loading";
    }

    return (
      <div className={isLoaderClass}>
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
        <form className="signup-form" onSubmit={this.handleOnSubmit}>
          <div className="signup-container">
            <input
              className="signup-input"
              type="text"
              placeholder="fullname"
              name="fullname"
              onChange={this.handleOnChange}
              value={fullname}
              required
            />
            {errors.fullname && (
              <span className="error-message">{errors.fullname}</span>
            )}
          </div>

          <div className="signup-container radio">
            <h3>Select gender</h3>
            <label htmlFor="male" className="label-gender">
              male
              <input
                type="radio"
                name="sex"
                id="male"
                onChange={this.handleOnChange}
                value="male"
                required
              />
            </label>
            <label htmlFor="female" className="label-gender">
              female
              <input
                type="radio"
                name="sex"
                id="female"
                onChange={this.handleOnChange}
                value="female"
                required
              />
            </label>

            <label htmlFor="others" className="label-gender">
              others
              <input
                type="radio"
                name="sex"
                id="others"
                onChange={this.handleOnChange}
                value="others"
                required
              />
            </label>
          </div>
          <div className="signup-container">
            <input
              className="signup-input"
              type="tel"
              minLength="11"
              maxLength="11"
              name="phoneNumber"
              placeholder="phone number"
              onChange={this.handleOnChange}
              value={phoneNumber}
              required
            />
            {errors.phoneNumber && (
              <span className="error-message">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="email"
              placeholder="email"
              name="email"
              onChange={this.handleOnChange}
              value={email}
              required
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="text"
              placeholder="username"
              name="username"
              onChange={this.handleOnChange}
              value={username}
              required
            />
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleOnChange}
              value={password}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              onChange={this.handleOnChange}
              value={confirmPassword}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>
          {isLoader}
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  signupAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { signupAction })(SignUp);
