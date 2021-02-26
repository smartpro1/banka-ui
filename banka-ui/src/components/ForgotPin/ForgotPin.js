import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { forgotPinAction } from "../../actions/userActions";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

import "./ForgotPin.css";
class ForgotPin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
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
    const { email } = this.state;

    const { forgotPinAction, history } = this.props;
    forgotPinAction(email, history);
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
    const { email, isLoading, errors } = this.state;

    let isLoader = (
      <button type="submit" className="register-btn">
        Submit
      </button>
    );

    if (isLoading) {
      isLoader = <LoadSpinner />;
    }

    return (
      <div className="forgot-pin">
        <div className="signup-logo">
          <h3>
            <a href="/">
              Banka&nbsp;
              <i className="fa fa-university logo-icon" aria-hidden="true"></i>
            </a>
          </h3>
        </div>
        <h2 id="signup-h2" className="fgt-password">
          Forgot Pin
        </h2>
        <form className="form-forgot-pin" onSubmit={this.handleOnSubmit}>
          <div className="signup-container">
            <input
              className="signup-input"
              type="email"
              placeholder="email"
              name="email"
              disabled={isLoading}
              onChange={this.handleOnChange}
              value={email}
              required
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          {isLoader}
        </form>
      </div>
    );
  }
}

ForgotPin.propTypes = {
  forgotPinAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { forgotPinAction })(ForgotPin);
