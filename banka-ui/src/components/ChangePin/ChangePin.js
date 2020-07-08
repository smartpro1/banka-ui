import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { changePinAction } from "../../actions/userActions";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import { isObjectEmpty } from "../../HelperFunctions/isObjectEmpty";

class ChangePin extends Component {
  constructor() {
    super();

    this.state = {
      pin: "",
      newPin: "",
      confirmNewPin: "",
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
    if (name === "confirmNewPin" && value.length > 0) {
      let confirmNewPinError = {};
      const { newPin } = this.state;

      if (newPin.length < 4) {
        confirmNewPinError.confirmNewPin =
          "fill in  new pin field first which cannot be empty or less than four characters";
        this.setState({ errors: confirmNewPinError, confirmNewPin: "" });
        return;
      }

      if (value !== this.state.newPin) {
        confirmNewPinError.confirmNewPin = "pins must match";
        this.setState({ errors: confirmNewPinError });
      } else {
        this.setState({ errors: confirmNewPinError });
      }
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const { pin, newPin, confirmNewPin } = this.state;

    const pinCredentials = {
      pin,
      newPin,
      confirmNewPin,
    };
    const { changePinAction, history } = this.props;
    changePinAction(pinCredentials, history);
  };

  render() {
    const { pin, newPin, confirmNewPin, isLoading, errors } = this.state;
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
          Change Pin
        </h2>
        <form className="change-pin-form">
          <div className="signup-container">
            <input
              className="signup-input"
              type="password"
              placeholder="enter your valid pin"
              minLength="4"
              maxLength="4"
              name="pin"
              disabled={isLoading}
              onChange={this.handleOnChange}
              value={pin}
              required
            />
            {errors.pin && <span className="error-message">{errors.pin}</span>}
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="password"
              placeholder="enter new pin"
              minLength="4"
              maxLength="4"
              name="newPin"
              onChange={this.handleOnChange}
              disabled={isLoading}
              value={newPin}
              required
            />
            {errors.newPin && (
              <span className="error-message">{errors.newPin}</span>
            )}
          </div>

          <div className="signup-container">
            <input
              className="signup-input"
              type="password"
              placeholder="confirm new pin"
              minLength="4"
              maxLength="4"
              name="confirmNewPin"
              value={confirmNewPin}
              disabled={isLoading}
              onChange={this.handleOnChange}
              required
            />
            {errors.confirmNewPin && (
              <span className="error-message">{errors.confirmNewPin}</span>
            )}
          </div>

          {isLoader}
        </form>
      </div>
    );
  }
}

ChangePin.propTypes = {
  changePinAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { changePinAction })(ChangePin);
