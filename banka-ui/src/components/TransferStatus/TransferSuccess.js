import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateTransactionAction } from "../../actions/userActions";
import { transferFundsAction } from "../../actions/userActions";

import "./TransferSuccess.css";


class TransferSuccess extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount = () => {
    const {updateTransactionAction, transferFund} = this.props;
    updateTransactionAction(transferFund.transactions);
  }

    render() {
      const {transferFund} = this.props;
        return (
            <div className="transfer-success">
             <div className="detail-div">
                <div className="circle white">
                    <div className="circle green">
                      <div className="status-info-success-mark trans-mark">
                      </div>
                    </div>
                </div>
                <h3>Transaction Successful</h3>
                <p className="trans-amt"><sup className="trans-sup">NGN</sup> {transferFund.amount} </p>
                <p className="sent-to">was sent to</p>
                <p className="trans-name">{transferFund.benfAcctNum}</p>
                <p className="trans-num">{transferFund.beneficiary}</p>
                
                <hr className="hr"/>
                
              <div className="ref-time">
               <p>Date & Time: {transferFund.timeOfTransaction}</p>
               <p>Ref number: {transferFund.transactionId}</p>
              </div>
              </div>
              <div className="trans-btns-div">
              <Link to="/transfer-funds" className="trans-btn perform">
                Perform Another Transaction
              </Link>
              <Link to="/dashboard" className="trans-btn dashboard">
                Back To Dashboard
              </Link>
              
              </div>
            </div>
        )
    }
}

// TransferSuccess.propTypes = {
//   updateTransactionAction: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   login: state.login,
//   transferFund: state.transferFund.transferFund,
// });

// export default connect(mapStateToProps, { logoutAction })(Dashboard);
//export default TransferSuccess;

// TransferSuccess.propTypes = {
//   updateAcctBalAction: PropTypes.func.isRequired,
  
// };

const mapStateToProps = (state) => ({
  transferFund: state.transferFund.transferFund,
});

export default connect(mapStateToProps, {updateTransactionAction})(TransferSuccess);