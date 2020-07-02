import React from "react";
import TransferDetails from "./TransferDetails";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <div className="dashboard-hamburger">
          <input type="checkbox" id="hamburger-checkbox" />
          <label htmlFor="hamburger-checkbox">
            <span className="hamburger-span 1"></span>
            <span className="hamburger-span 2"></span>
            <span className="hamburger-span 3"></span>
          </label>
        </div>
        <h3>Account</h3>
        <div className="logout" title="logout">
          <i class="fa fa-power-off" aria-hidden="true"></i>
        </div>
      </div>
      <div className="dashboard-account">
        <div className="dashboard-account-details"></div>
      </div>
      <TransferDetails />
    </div>
  );
}
