import React, { Component } from "react";

import "./TransferDetails.css";
class TransferDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="transfer-details">
        <div className="transfer-descriptions">
          <h4>Monday, June 15th 2020</h4>
          <h3>Michael Obode/Cashin</h3>
        </div>
        <div className="transfer-amount">#10, 000;</div>
      </div>
    );
  }
}

export default TransferDetails;
