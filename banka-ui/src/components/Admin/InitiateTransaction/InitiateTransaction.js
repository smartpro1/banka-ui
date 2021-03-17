import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";

import {withdrawalAction, depositAction} from "../../../actions/adminActions";
import LoadSpinner from "../../../components/LoadSpinner/LoadSpinner";
import AdminSuccessMesg from '../AdminSuccessMesg/AdminsuccessMesg';

import './InitiateTransaction.css';

class InitiateTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      acctNum: "",
      amount: "",
      depositor: "",
      pin: "",
      isLoading: false,
      errors: {},
      apiResponse: ""
    };
  }
  

  handleOnChange = (event) => {
    let acctNumError = {}; 
    let pinError = {};
    const [name, value] = [event.target.name, event.target.value];

    if (name === "acctNum") {
       if (value.length === 10) {
        acctNumError.acctNum = "";
        this.setState({ errors: acctNumError });
       }

       else if (value.length > 10) {
        return;
       }
       else {
        acctNumError.acctNum = "account number must be 10 digits";
        this.setState({ errors: acctNumError });
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

    // this.setState({ isLoading: true });
    const { acctNum, pin, depositor,  apiResponse, isLoading} = this.state;
    let amount = this.state.amount;
    this.setState({ isLoading: true });

    // remove commas from the amount input element caused by CurrencyFormat
    amount = amount.replace(/,/g, "");
    const transactionDetails = {
      acctNum,
      amount,
      pin,
    };
    const {withdrawalAction, depositAction} = this.props;
    let message = "";
    if (this.props.title === "Deposit") {
      transactionDetails.depositor = depositor;
      message = depositAction(transactionDetails);
    } else {
      message = withdrawalAction(transactionDetails);
    }

    message.then(mesg => {
      this.setState({apiResponse: mesg.payload, isLoading: false, pin: "", acctNum: "",  status: "", depositor: ""});
    });
    
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
    const {title} = this.props
    const {
      acctNum,
      amount,
      pin,
      depositor,
     isLoading,
      errors,
      apiResponse
     
    } = this.state;

    // let btnText = {};
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
    
    let initiateTransBtn = "transfer-btn";
    let isLoader = "";
    if (isLoading) {
      isLoader = <LoadSpinner />;
      initiateTransBtn += " hide-ops";
    }

    let adminsuccessMesg =  "";
          if (apiResponse === "Successful") {
            adminsuccessMesg = (<AdminSuccessMesg/>);
          }
    

    return (
      <div className="init-transc">
      {adminsuccessMesg} 
        <form className="init-transc-form" onSubmit={this.handleOnSubmit}>
          <h2 id="signup-h2">{title} Fund</h2>
          {isLoader}
          {displayErrorMessage}
          <div className="form-group">
            <label htmlFor="acctNum" className="transfer-label extra" id="admin-transc-label">
              Acct Number
            </label>
            <input
              type="number"
              id="acctNum"
              name="acctNum"
              value={acctNum}
              onChange={this.handleOnChange}
              minLength="10"
              maxLength="10"
             // disabled={elementsState}
              placeholder="enter account number"
              required
            />
           
            {errors.acctNum && (
              <span className="error-message">{errors.acctNum}</span>
            )}
            <label htmlFor="amount" className="transfer-label extra" id="admin-transc-label">
              Amount(naira)
            </label>
            <CurrencyFormat
              id="amount"
              name="amount"
              value={amount}
              onChange={this.handleOnChange}
              placeholder="enter amount"
            //  disabled={elementsState}
              thousandSeparator={true}
              // suffix={".00"}
              required
            />
            {errors.amount && (
              <span className="error-message">{errors.amount}</span>
            )}
            
            {title === "Deposit" &&
              (<React.Fragment><label htmlFor="depositor" className="transfer-label extra" id="admin-transc-label">
                Depositor{" "}
              </label>
              <input
                type="text"
                name="depositor"
                value={depositor}
                onChange={this.handleOnChange}
                placeholder="enter depositor name"
              // disabled={elementsState}
                required
              />
            </React.Fragment> )}    
         
            
            <label htmlFor="pin" className="transfer-label extra" id="admin-transc-label">
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
             // disabled={elementsState}
              required
            />
            {errors.pin && <span className="error-message">{errors.pin}</span>}
          </div>
          
          <button type="submit" className={initiateTransBtn} id="admin-transc-btn">
            {title}
          </button>
        </form>
      </div>
    );
  }
}

InitiateTransaction.defaultProps = {
  title: 'Withdrawal'
};

InitiateTransaction.propTypes = {
 withdrawalAction: PropTypes.func.isRequired,
 depositAction: PropTypes.func.isRequired,
 errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, {withdrawalAction, depositAction})(InitiateTransaction);




