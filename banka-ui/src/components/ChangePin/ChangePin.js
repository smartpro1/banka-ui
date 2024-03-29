import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { changePinAction } from "../../actions/userActions";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import { isObjectEmpty } from "../../HelperFunctions/isObjectEmpty";

class ChangePin extends Component {
  constructor() {
    super();

    this.currentPin = "";
    this.newPin = "";
    this.confirmNewPin = "";

    this.state = {
      currentPin: "",
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
   
    if (name ==="currentPin") {
      this.currentPin = value;
      let currentPinError = {};
      if (value.length < 4 ) {
        currentPinError.currentPin = "pin must be between 4 to 8 digits";
        this.setState({ errors: currentPinError });
      } else if (value.length > 8) {
        return;
      } else {
        currentPinError.pin = "";
        this.setState({ errors: currentPinError });
      }
    }

    if (name ==="newPin") {
      this.newPin = value;
      let newPinError = {};
      if (value.length < 4 ) {
        newPinError.newPin = "pin must be between 4 to 8 digits";
        this.setState({ errors: newPinError });
      } else if (value.length > 8) {
        return;
      } else {
        newPinError.pin = "";
        this.setState({ errors: newPinError });
      }
    }

    //  validation for confirm new pin
    if (name === "confirmNewPin" && value.length > 0) {
      this.confirmNewPin = value;
      let confirmNewPinError = {};
      let newPinError = {};
      const { newPin } = this.state;

      if (value.length < 4 ) {
        newPinError.newPin = "pin must be between 4 to 8 digits";
        this.setState({ errors: newPinError });
      }

      if (value.length > 8) {
        return;
      }

      if (newPin.length < 4 ) {
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
    this.setState({ [name]: value });
    if((this.currentPin.length > 3 && this.currentPin.length < 9) 
    && (this.newPin.length > 3 && this.newPin.length < 9) 
    && ( this.newPin ===  this.confirmNewPin)) {
      this.setState({errors: {}});
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const { currentPin, newPin, confirmNewPin } = this.state;

    const pinCredentials = {
      currentPin,
      newPin,
      confirmNewPin,
    };
    const { changePinAction, history } = this.props;
    changePinAction(pinCredentials, history);
  };



  render() {
    const { currentPin, newPin, confirmNewPin, isLoading, errors } = this.state;
    let submitBtnClassName = "";
    let btnNotAllowSubmit = ""; // allows submit by default

    if (isObjectEmpty(errors)) {
      submitBtnClassName = "register-btn";
      btnNotAllowSubmit = false;
    } else {
      submitBtnClassName = "register-btn error";
      btnNotAllowSubmit = true;
    }
    
    // If there is an error from the server, allow btn submit
    if(errors.invalidCredentialException) {
      submitBtnClassName = "register-btn";
      btnNotAllowSubmit = false;
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
    
    let displayErrorMessage = "";

    if (errors.invalidCredentialException) {
      displayErrorMessage = (
        <div className="login-err-mesg">
          {" "}
          <i className="fa fa-bell-slash-o" aria-hidden="true"></i>{" "}
          &nbsp;{errors.invalidCredentialException}
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
        <h2 id="signup-h2" className="fgt-password">
          Change Pin 
        </h2>
        
        {displayErrorMessage}
        <form className="change-pin-form" onSubmit={this.handleOnSubmit}>
          <div className="signup-container">
            <input
              className="signup-input trans-pin"
              type="number"
              placeholder="enter your current pin"
              name="currentPin"
              disabled={isLoading}
              onChange={this.handleOnChange}
              value={currentPin}
              required
            />
            {errors.currentPin && <span className="error-message">{errors.currentPin}</span>}
          </div>

          <div className="signup-container">
            <input
              className="signup-input trans-pin"
              type="number"
              placeholder="enter new pin"
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
              className="signup-input trans-pin"
              type="number"
              placeholder="confirm new pin"
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
