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
    const [name, value] = [event.target.name, event.target.value];
    this.setState({ [name]: value });

    // validation for phone number
    if (name === "phoneNumber" && value.length > 1) {
      let phoneNumberError = {};
      let firstTwoDigits = value.substring(0, 2);
      if (
        firstTwoDigits !== "07" &&
        firstTwoDigits !== "08" &&
        firstTwoDigits !== "09"
      ) {
        phoneNumberError.phoneNumber =
          "invalid format - phone number must start with 07, 08 or 09";
        this.setState({ errors: phoneNumberError });
      }

      // check if from the third number are all digits
      else if (value.length > 2 && !/^\d+$/.test(value.substring(2))) {
        phoneNumberError.phoneNumber = "phone number must all be digits";
        this.setState({ errors: phoneNumberError });
      } else {
        this.setState({ errors: phoneNumberError });
      }
    }

    //  validation for confirm password
    if (name === "confirmPassword" && value.length > 0) {
      let confirmPasswordError = {};
      const { password } = this.state;
      if (password.length < 6) {
        confirmPasswordError.confirmPassword =
          "fill in password field first which cannot be empty or less than six characters";
        this.setState({ errors: confirmPasswordError, confirmPassword: "" });
        return;
      }

      if (value !== password) {
        confirmPasswordError.confirmPassword = "passwords must match";
        this.setState({ errors: confirmPasswordError });
      } else {
        this.setState({ errors: confirmPasswordError });
      }
    }
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
      phoneNumber,
      email,
      username,
      password,
      confirmPassword,
      isLoading,
      errors,
    } = this.state;

    let submitBtnClassName = "";
    let btnNotAllowSubmit = ""; // allows submit by default

    // check if errors object is empty
    if (
      !errors ||
      (Object.keys(errors).length === 0 && errors.constructor === Object)
    ) {
      submitBtnClassName = "register-btn";
      btnNotAllowSubmit = false;
    } else {
      submitBtnClassName = "register-btn error";
      btnNotAllowSubmit = true;
    }

    let isLoader = (
      <button
        type="submit"
        className={submitBtnClassName}
        disabled={btnNotAllowSubmit}
      >
        Submit
      </button>
    );

    if (isLoading) {
      isLoader = (
        <div id="logo-spinner">
          Banka&nbsp;
          <i className="fa fa-university logo-icon" aria-hidden="true"></i>
        </div>
      );
    }

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
        <form className="signup-form" onSubmit={this.handleOnSubmit}>
          <div className="signup-container">
            <input
              className="signup-input"
              type="text"
              placeholder="fullname"
              name="fullname"
              onChange={this.handleOnChange}
              disabled={isLoading}
              value={fullname}
              minLength="6"
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
                disabled={isLoading}
                value="M"
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
                disabled={isLoading}
                value="F"
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
                disabled={isLoading}
                value="-"
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              minLength="4"
              onChange={this.handleOnChange}
              disabled={isLoading}
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
              disabled={isLoading}
              minLength="6"
              value={password}
              required
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
              disabled={isLoading}
              minLength="6"
              value={confirmPassword}
              required
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
