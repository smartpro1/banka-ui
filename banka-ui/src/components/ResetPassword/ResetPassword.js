import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoadSpinner from "../LoadSpinner/LoadSpinner";
import "./ResetPassword.css";
import { isObjectEmpty } from "../../HelperFunctions/isObjectEmpty";
import { resetPasswordAction } from "../../actions/userActions";

class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      password: "",
      confirmPassword: "",
      isLoading: false,
      errors: {},
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        isLoading: false,
      });
    }
  };

  handleOnChange = (event) => {
    const [name, value] = [event.target.name, event.target.value];
    this.setState({ [name]: value });

    //  validation for confirm new pin
    if (name === "confirmPassword" && value.length > 0) {
      let confirmPasswordError = {};
      const { password } = this.state;

      if (password.length < 6) {
        confirmPasswordError.confirmPassword =
          "fill in  password field first which cannot be empty or less than six characters";
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

  render() {
    const { password, confirmPassword, isLoading, errors } = this.state;
    let submitBtnClassName = "";
    let btnNotAllowSubmit = ""; // allows submit by default

    if (isObjectEmpty(errors)) {
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

    let isLoaderClass = "signup";

    if (isLoading) {
      isLoader = <LoadSpinner />;
      isLoaderClass = "signup loading";
    }

    return (
      <div className="reset-password">
        <div className="signup-logo">
          <h3>
            <a href="/">
              Banka&nbsp;
              <i className="fa fa-university logo-icon" aria-hidden="true"></i>
            </a>
          </h3>
        </div>
        <h2 id="signup-h2" className="fgt-password">
          ResetPassword
        </h2>
        <form className="reset-password-form">
          <div className="signup-container">
            <input
              className="signup-input"
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleOnChange}
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

ResetPassword.propTypes = {
  resetPasswordAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { resetPasswordAction })(ResetPassword);
