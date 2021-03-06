import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";

import "./TransferFund.css";
import { transferFundsAction } from "../../actions/userActions";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

class TransferFund extends Component {
  constructor(props) {
    super(props);

    this.state = {
      benfAcctNum: "",
      amount: "",
      pin: "",
      description: "",
      isLoading: false,
      elementsState: false,
      btnText: "Continue",
      errors: {},
    };
  }

  handleOnChange = (event) => {
    let benfAcctNumError = {}; 
    let pinError = {};
    const [name, value] = [event.target.name, event.target.value];

    if (name === "benfAcctNum") {
       if (value.length === 10) {
        benfAcctNumError.benfAcctNum = "";
        this.setState({ errors: benfAcctNumError });
       }

       else if (value.length > 10) {
        return;
       }
       else {
        benfAcctNumError.benfAcctNum = "account number must be 10 digits";
        this.setState({ errors: benfAcctNumError });
       } 
    }

    if (name ==="pin") {
      if (value.length < 4 ) {
        pinError.pin = "pin must be between 4 to 8 digits";
        this.setState({ errors: pinError });
      } else if (value.length > 8) {
        return;
      } else {
        pinError.pin = "";
        this.setState({ errors: pinError });
      }
    }

    this.setState({ [name]: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    if (this.state.btnText === "Continue") {
      this.setState({ elementsState: true, btnText: "Confirm" });
      return;
    }

    this.setState({ isLoading: true });
    const { benfAcctNum, pin, description } = this.state;
    let amount = this.state.amount;

    // remove commas from the amount input element caused by CurrencyFormat
    amount = amount.replace(/,/g, "");
    const transferDetails = {
      benfAcctNum,
      amount,
      pin,
      description,
    };
    const { transferFundsAction, history } = this.props;
    transferFundsAction(transferDetails, history);
  };

  handleBackClick = () => {
    this.setState({ elementsState: false, btnText: "Continue" });
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
      benfAcctNum,
      amount,
      pin,
      description,
      isLoading,
      errors,
      elementsState,
      btnText,
    } = this.state;

    
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
    
    let isLoader = "";
    if (isLoading) {
      isLoader = <LoadSpinner />;
    }
    let transferChargeLabel = "transfer-charge-label";
    let transferChargeInput = "transfer-charge-input";
    let backIcon = "";
    if (elementsState) {
      transferChargeLabel = "";
      transferChargeInput = "";
      backIcon = (
        <i
          className="fa fa-arrow-left transfer-back"
          aria-hidden="true"
          onClick={this.handleBackClick}
        >
          {" "}
          Back
        </i>
      );
    }
    let transferBtn = "transfer-btn"
    if (isLoading) {
         transferBtn += "-hide";
       }
            
    return (
      <div className="transfer-fund">
        {backIcon}
        <form className="transfer-form" onSubmit={this.handleOnSubmit}>
          <div className="signup-logo">
            <h3>
              <a href="/dashboard">
                Banka&nbsp;
                <i
                  className="fa fa-university logo-icon"
                  aria-hidden="true"
                ></i>
              </a>
            </h3>
          </div>
          <h2 id="signup-h2">Send Money</h2>
          {isLoader}
          {displayErrorMessage}
          <div className="form-group">
            <label htmlFor="benfAcctNum" className="transfer-label extra">
              Beneficiary Acct Number
            </label>
            <input
              type="number"
              id="benfAcctNum"
              name="benfAcctNum"
              value={benfAcctNum}
              onChange={this.handleOnChange}
              minLength="10"
              maxLength="10"
              disabled={elementsState}
              placeholder="enter beneficiary's account number"
              required
            />
           
            {errors.benfAcctNum && (
              <span className="error-message">{errors.benfAcctNum}</span>
            )}
            <label htmlFor="amount" className="transfer-label extra">
              Amount(naira)
            </label>
            <CurrencyFormat
              id="amount"
              name="amount"
              value={amount}
              onChange={this.handleOnChange}
              placeholder="enter amount"
              disabled={elementsState}
              thousandSeparator={true}
              // suffix={".00"}
              required
            />
            {errors.amount && (
              <span className="error-message">{errors.amount}</span>
            )}
            <label className="transfer-label extra" id={transferChargeLabel}>
              Transfer Charge(naira)
            </label>
            <input
              type="number"
              disabled
              value="25.00"
              id="charges"
              className={transferChargeInput}
            />
            <label htmlFor="description" className="transfer-label extra">
              Description(optional)
            </label>

            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={this.handleOnChange}
              placeholder="description of transaction - optional"
              disabled={elementsState}
            />
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
            <label htmlFor="pin" className="transfer-label extra">
              Pin{" "}
            </label>
            <input
              type="number"
              className="trans-pin"
              id="pin"
              name="pin"
              value={pin}
              onChange={this.handleOnChange}
              placeholder="enter four to eight digits transfer pin"
              disabled={elementsState}
              required
            />
            {errors.pin && <span className="error-message">{errors.pin}</span>}
          </div>
          
          <button type="submit" className={transferBtn}>
            {btnText}
          </button>
        </form>
      </div>
    );
  }
}

TransferFund.propTypes = {
  transferFundsAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { transferFundsAction })(TransferFund);




