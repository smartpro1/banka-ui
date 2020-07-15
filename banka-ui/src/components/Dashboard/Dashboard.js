import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutAction } from "../../actions/userActions";
import CurrencyFormat from "react-currency-format";

import Logo from "../Logo/Logo";
import TransferDetails from "./TransferDetails";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashboardClass: "dashboard",
      sidebarClass: "dashboard-sidebar",
      accountNumber: "",
      accountBalance: "",
      isLoading: false,
    };
  }

  logout = () => {
    this.props.logoutAction();
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const accountInfo = await this.getAccountDetails();

    this.setState({
      accountNumber: accountInfo.accountNumber,
      accountBalance: accountInfo.accountBalance,
    });
    this.setState({ isLoading: false });
  };

  getAccountDetails = async () => {
    const accountInfo = await axios.get(`/api/v1/users/get-account-info`);
    return accountInfo.data;
  };

  // const [dashboardClass, setDashboardClass] = useState("dashboard");
  // const [sidebarClass, setsidebarClass] = useState("dashboard-sidebar");

  handleOnClick = () => {
    this.state.dashboardClass === "dashboard"
      ? this.setState({ dashboardClass: "dashboard translate" })
      : this.setState({ dashboardClass: "dashboard" });

    this.state.sidebarClass === "dashboard-sidebar"
      ? this.setState({ sidebarClass: "dashboard-sidebar translate" })
      : this.setState({ sidebarClass: "dashboard-sidebar" });
  };

  render() {
    const { accountNumber, accountBalance, isLoading } = this.state;
    let isLoader = "";

    if (isLoading) {
      isLoader = <LoadSpinner />;
    }

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
      <React.Fragment>
        <div className={this.state.dashboardClass}>
          <div className="dashboard-top">
            <div className="dashboard-nav">
              <div className="dashboard-hamburger">
                <input type="checkbox" id="checkbox-hack" />
                <label htmlFor="checkbox-hack" id="checkbox-hack-label">
                  <div id="hamburger" onClick={this.handleOnClick}>
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
                  onClick={this.logout}
                ></i>
              </div>
            </div>

            {isLoader}
            <div className="dashboard-account">
              <div className="dashboard-account-details">
                <p>Savings - {accountNumber || "invalid"} </p>
                <h4>
                  &#x20A6;
                  <CurrencyFormat
                    value={accountBalance || "----"}
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
        <div className={this.state.sidebarClass}>
          <Logo className="dashboard-logo" />
          <ul>
            <li>
              <Link to="/transfer-funds">
                <i className="fa fa-share" aria-hidden="true"></i>{" "}
                &nbsp;Transfer Funds
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
                <i className="fa fa-key" aria-hidden="true"></i> &nbsp;Change
                Pin
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
                <i className="fa fa-user-secret" aria-hidden="true"></i>{" "}
                &nbsp;Profile
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
                <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
                &nbsp;Logout
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  logoutAction: PropTypes.func.isRequired,
  // login: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => ({
//   login: state.login,
// });

export default connect(null, { logoutAction })(Dashboard);
