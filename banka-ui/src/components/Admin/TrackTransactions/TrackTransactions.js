import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {trackTransactionsAction, getTransactionByIdAction} from "../../../actions/adminActions";
import Sidebar from '../Layout/Sidebar/Sidebar';
import Navbar from '../Layout/Navbar/Navbar';
import LoadSpinner from "../../../components/LoadSpinner/LoadSpinner";
import "./TrackTransactions.css";

class TrackTransaction extends Component {

    constructor() {
        super();

        this.state = {
          start: "",
          end: "",
          transId: "",
          showTransactionById: false,
          isLoading: false
        };
      }
    
      handleOnChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      handleToggleSwitch = () => {
        this.setState({showTransactionById: !this.state.showTransactionById});
      }
    
      handleOnSubmit = (event) => {
        event.preventDefault();
        const { start, end, showTransactionById, transId, isLoading } = this.state;
        this.setState({ isLoading: true });
        const dateRange = { start, end };
        const { trackTransactionsAction, getTransactionByIdAction, history } = this.props;
        
        if (showTransactionById) {
          getTransactionByIdAction(transId, history);
        } else {
          trackTransactionsAction(dateRange, history);
        }
       
      };

     

    render() {
        const { start, end, showTransactionById, transId, isLoading } = this.state;
        let h2Content = "Track transactions from a particular date to another";

        if (showTransactionById) {
           h2Content = "Track transactions by Id";
        }

        let trackTransBtn = "transfer-btn";
        let isLoader = "";

        if (isLoading) {
           isLoader = <LoadSpinner />;
           trackTransBtn += " hide-ops";
        }

        return(
            <div className="admin-dashboard admin-track-trans-div">
                <Sidebar className="admin-dashboard-sidebar"/>
                <div className="admin-main-dashboard">
                    <Navbar/>
                    <div className="init-transc">
                    <h2 className="tracked-trans-h2">
                      {h2Content}
                    </h2>
                    <form className="init-transc-form" onSubmit={this.handleOnSubmit}>
                     {isLoader}
                    {!showTransactionById && (
                      <React.Fragment>
                      <div className="form-group">
                      <label htmlFor="start-date" className="transfer-label extra" id="admin-transc-label">
                      Start Date
                     </label>
                        <input
                          type="date"
                          name="start"
                          value={start}
                          onChange={this.handleOnChange}
                          id="start-date"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="end-date" className="transfer-label extra" id="admin-transc-label">
                        End Date
                        </label>
                        <input
                          type="date"
                          name="end"
                          value={end}
                          onChange={this.handleOnChange}
                          id="end-date"
                          required
                        />
                       
                      </div>
                      </React.Fragment>
                    )}
                      
                    {showTransactionById && (
                      <div className="form-group">
                        <label htmlFor="trans-id" className="transfer-label extra" id="admin-transc-label">
                        Transaction Id
                        </label>
                        <input
                          type="text"
                          name="transId"
                          className=""
                          value={transId}
                          onChange={this.handleOnChange}
                          placeholder="Enter transaction id"
                          id="trans-id"
                          required
                        />
                      </div>
                    )}
                      <button type="submit" className={trackTransBtn} id="admin-transc-btn">
                      Submit
                    </button>
                    </form>
                  </div>
                </div>   
                <div className="toggle-switch-track-trans" >
                  <label className="switch" >
                     <input type="checkbox" onClick={this.handleToggleSwitch}/>
                     <span className="slider round"></span>
                  </label>
                </div> 
            </div>
        );
    }
}

TrackTransaction.propTypes = {
    trackTransactionsAction: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    errors: state.errors,
  });
  export default connect(mapStateToProps, { trackTransactionsAction, getTransactionByIdAction })(TrackTransaction);