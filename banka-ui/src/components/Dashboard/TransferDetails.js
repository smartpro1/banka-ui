import React, { Component } from "react";
import CurrencyFormat from "react-currency-format";

import "./TransferDetails.css";
class TransferDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { date, description, amount, transactionType } = this.props;
    let transactionClass = "transfer-amount ";
    if (transactionType === "DEBIT") transactionClass += "debit";
    return (
      <div className="transfer-details">
        <div className="transfer-detail">
          <div className="transfer-descriptions">
            <p>{date}</p>
            <h4>{description}</h4>
          </div>
          {amount &&
          <div className={transactionClass}>
            &#x20A6;
            <CurrencyFormat
              value={amount}
              displayType={"text"}
              thousandSeparator={true}
            />
            {".00"}
          </div>
  }
        </div>
      </div>
    );
  }
}

export default TransferDetails;
