import React, { Component } from "react";

import "./TransferDetails.css";
class TransferDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { date, description, amount, transactionType } = this.props;
    let transactionClass = "transfer-amount ";
    if (transactionType === "debit") transactionClass += "debit";
    return (
      <div className="transfer-details">
        <div className="transfer-detail">
          <div className="transfer-descriptions">
            <p>{date}</p>
            <h4>{description}</h4>
          </div>
          <div className={transactionClass}>#{amount}</div>
        </div>
      </div>
    );
  }
}

export default TransferDetails;
