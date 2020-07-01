import React, { Component } from "react";

import "./TransferFund.css";
class TransferFund extends Component {
  render() {
    return (
      <div className="transfer-fund">
        <form className="transfer-form">
          <div className="signup-logo">
            <h3>
              <a href="/">
                Banka&nbsp;
                <i
                  className="fa fa-university logo-icon"
                  aria-hidden="true"
                ></i>
              </a>
            </h3>
          </div>
          <h2 id="signup-h2">Send Money</h2>
          <div className="form-group">
            <label htmlFor="benfAcctNum" className="transfer-label extra">
              Beneficiary Acct Number
            </label>
            <input
              type="text"
              id="benfAcctNum"
              minLength="10"
              maxLength="10"
              placeholder="enter beneficiary's account number"
            />
            <label htmlFor="amount" className="transfer-label extra">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="enter amount"
              min="50"
              max="1000000"
              step="1000"
            />
            <label htmlFor="description" className="transfer-label extra">
              Description(optional)
            </label>
            <input
              type="text"
              id="description"
              placeholder="description of transaction - optional"
            />
            <label htmlFor="pin" className="transfer-label extra">
              Pin{" "}
            </label>
            <input
              type="password"
              id="pin"
              minLength="4"
              maxLength="4"
              placeholder="enter transfer pin"
            />
          </div>
          <button type="submit" className="transfer-btn" id="transfer-btn">
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export default TransferFund;
