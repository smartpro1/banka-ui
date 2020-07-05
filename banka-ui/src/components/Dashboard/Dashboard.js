import React, { useState } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import Logo from "../Logo/Logo";
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

  const [dashboardClass, setDashboardClass] = useState("dashboard");
  const [sidebarClass, setsidebarClass] = useState("dashboard-sidebar");
  const handleOnClick = () => {
    dashboardClass === "dashboard"
      ? setDashboardClass("dashboard translate")
      : setDashboardClass("dashboard");
    sidebarClass === "dashboard-sidebar"
      ? setsidebarClass("dashboard-sidebar translate")
      : setsidebarClass("dashboard-sidebar");
  };

  return (
    <React.Fragment>
      <div className={dashboardClass}>
        <div className="dashboard-top">
          <div className="dashboard-nav">
            <div className="dashboard-hamburger">
              <input type="checkbox" id="checkbox-hack" />
              <label htmlFor="checkbox-hack" id="checkbox-hack-label">
                <div id="hamburger" onClick={handleOnClick}>
                  <span id="span1"></span>
                  <span id="span2"></span>
                  <span id="span3"></span>
                </div>
              </label>
            </div>
            <h3 className="dashboard-account-info">Account Info</h3>
            <div className="logout" title="logout">
              <i
                className="fa fa-sign-out dashboard-logout"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div className="dashboard-account">
            <div className="dashboard-account-details">
              <p>Savings - 0123456789</p>
              <h4>
                &#x20A6;
                <CurrencyFormat
                  value={1000005}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                {".00"}
              </h4>
            </div>
          </div>

          <div className="chart"></div>
        </div>
        {result}
      </div>
      <div className={sidebarClass}>
        <Logo className="dashboard-logo" />
        <ul>
          <li>
            <Link to="/transfer-funds">
              <i className="fa fa-share" aria-hidden="true"></i> &nbsp;Transfer
              Funds
            </Link>
          </li>
          <li>
            <Link to="airtime-bill-payment">
              <i className="fa fa-money" aria-hidden="true"></i>
              &nbsp; Airtime and Bill Payment
            </Link>
          </li>
          <li>
            <Link to="change-pin">
              <i className="fa fa-key" aria-hidden="true"></i> &nbsp;Change Pin
            </Link>
          </li>
          <li>
            <Link to="dummy-accounts">
              <i className="fa fa-users" aria-hidden="true"></i> &nbsp;Dummy
              Accounts
            </Link>
          </li>

          <li>
            <Link to="/profile">
              <i class="fa fa-user-secret" aria-hidden="true"></i> &nbsp;Profile
            </Link>
          </li>

          <li>
            <Link to="/shop-product">
              <i className="fa fa-credit-card" aria-hidden="true"></i>{" "}
              &nbsp;Shop With Card
            </Link>
          </li>

          <li>
            <Link to="/logout">
              <i className="fa fa-sign-out" aria-hidden="true"></i> &nbsp;Logout
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
