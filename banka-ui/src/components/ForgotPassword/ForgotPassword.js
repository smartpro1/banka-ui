import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { forgotPasswordAction } from "../../actions/userActions";
import "./ForgotPassword.css";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      errors: {},
      isLoading: false,
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
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const email = this.state.email;
    const userEmail = { email };
    const { forgotPasswordAction, history } = this.props;
    forgotPasswordAction(userEmail, history);
  };

  

  render() {
    const { email, isLoading, errors } = this.state;
    let displayErrorMessage = "";

    if (errors.EmailSendingException) {
      displayErrorMessage = (
        <div className="login-err-mesg">
          {" "}
          <i className="fa fa-bell-slash-o" aria-hidden="true"></i>{" "}
          &nbsp;{errors.EmailSendingException}
        </div>
      );
    }

    let isLoader = (
      <button type="submit" className="register-btn">
        Submit
      </button>
    );

    if (isLoading) {
      isLoader = <LoadSpinner />;
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
        <h2 id="signup-h2" className="fgt-password">
          Reset Password
        </h2>
        {displayErrorMessage}
        <form className="forgot-password-form" onSubmit={this.handleOnSubmit}>
          <div className="signup-container">
            <input
              className="signup-input"
              type="email"
              placeholder="enter your valid email to reset password"
              name="email"
              value={email}
              onChange={this.handleOnChange}
              disabled={isLoading}
              required
            />
            {errors.invalidCredentialException && (
              <span className="error-message">
                {errors.invalidCredentialException}
              </span>
            )}
          </div>
          {isLoader}
        </form>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  forgotPasswordAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { forgotPasswordAction })(
  ForgotPassword
);
