import React from "react";
import TransferDetails from "./TransferDetails";

import "./Dashboard.css";
export default function Dashboard() {
  const detailsArr = [
    {
      date: "Monday, June 15th 2020",
      description: "Salary for April",
      amount: 10000,
      transactionType: "credit",
    },
    {
      date: "Tuesday, June 16th 2020",
      description: "Payment for data",
      amount: 1000,
      transactionType: "debit",
    },
    {
      date: "Wednesday, July 1st 2020",
      description: "Salary for June",
      amount: 15000,
      transactionType: "credit",
    },
    {
      date: "Tuesday, June 15th 2020",
      description: "Payment for Gotv",
      amount: 2460,
      transactionType: "debit",
    },
  ];

  const result = detailsArr.map((detailArr) => (
    <TransferDetails
      key={detailArr.amount}
      date={detailArr.date}
      description={detailArr.description}
      amount={detailArr.amount}
      transactionType={detailArr.transactionType}
    />
  ));
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="dashboard-nav">
          <div className="dashboard-hamburger">
            <input type="checkbox" id="checkbox-hack" />
            <label htmlFor="checkbox-hack" id="checkbox-hack-label">
              <div id="hamburger">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
              </div>
            </label>
          </div>
          <h3 className="dashboard-account-info">Account Info</h3>
          <div className="logout" title="logout">
            <i className="fa fa-power-off" aria-hidden="true"></i>
          </div>
        </div>

        <div className="dashboard-account">
          <div className="dashboard-account-details">
            <p>Savings - 0123456789</p>
            <h4>#10, 000.00</h4>
          </div>
        </div>

        <div className="chart"></div>
      </div>
      {result}
    </div>
  );
}
