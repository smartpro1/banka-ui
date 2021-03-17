import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Sidebar from '../Layout/Sidebar/Sidebar';
import Navbar from '../Layout/Navbar/Navbar';
import "./Operation.css";
import LoadSpinner from "../../../components/LoadSpinner/LoadSpinner";
import {operationAction} from "../../../actions/adminActions";
import AdminSuccessMesg from '../AdminSuccessMesg/AdminsuccessMesg';


class Operation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          acctNum: "",
          pin: "",
          status: "",
          errors: {},
          isLoading: false,
          apiResponse: ""
        };
      }
      
    
      handleOnChange = (event) => {
        let acctNumError = {}; 
        let pinError = {};
        const [name, value] = [event.target.name, event.target.value];

        if (name === "acctNum") {
           if (value.length === 10) {
            acctNumError.acctNum = "";
            this.setState({ errors: acctNumError });
           }
    
           else if (value.length > 10) {
            return;
           }
           else {
            acctNumError.acctNum = "account number must be 10 digits";
            this.setState({ errors: acctNumError });
           } 
        }
    
        if (name ==="pin") {
          if (value.length < 4 ) {
            pinError.pin = "pin must be between 4 to 8 digits";
            this.setState({ errors: pinError });
          } else if (value.length > 8) {
            return;
          } else {
            pinError.pin = "";
            this.setState({ errors: pinError });
          }
        }
    
        this.setState({ [name]: value });
      };

      handleOnSubmit = (event) => {
        event.preventDefault();
        const { acctNum, pin, status, apiResponse} = this.state;
        const adminResponse = window.confirm(`Are you sure you want to set this user's status to ${status}`)
        if (!adminResponse) {
           return;
        }
        this.setState({ isLoading: true });
       
        const operationDetails = {
          acctNum,
          status,
          pin
        };
        
        const  {operationAction} = this.props;
        const message = operationAction(operationDetails);
        message.then(mesg => {
          this.setState({apiResponse: mesg.payload, isLoading: false, pin: "", acctNum: "",  status: ""});
        });
      
      };
    
      componentWillReceiveProps = (nextProps) => {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors,
            isLoading: false,
          });
        }
      };

    render() {
        const {
            acctNum,
            pin,
            status,
           isLoading,
            errors,
           apiResponse
          } = this.state;

          let displayErrorMessage = "";

          if (errors.invalidCredentialException) {
            displayErrorMessage = (
              <div className="login-err-mesg">
                {" "}
                <i className="fa fa-bell-slash-o" aria-hidden="true"></i>{" "}
                &nbsp;{errors.invalidCredentialException}
              </div>
            );
          }
          
          let opsSubmitBtn = "transfer-btn";
          let isLoader = "";
          if (isLoading) {
            isLoader = <LoadSpinner />;
            opsSubmitBtn += " hide-ops";
          }

          let adminSuccessMesg =  "";
          if (apiResponse === "Successful") {
            adminSuccessMesg = (<AdminSuccessMesg/>);
          }

        return(
          
            <div className="admin-dashboard">
            {isLoader}
                <Sidebar className="admin-dashboard-sidebar"/>
                <div className="admin-main-dashboard">
                    <Navbar/>
                    <div className="init-transc">
                        {adminSuccessMesg}
                        <form className="init-transc-form" onSubmit={this.handleOnSubmit}>
                            {isLoader}
                            <h2 id="signup-h2">Operation</h2>
                            {displayErrorMessage}
                            <div className="form-group">
                                <label htmlFor="benfAcctNum" className="transfer-label extra" id="admin-transc-label">
                                Acct Number
                                </label>
                                <input
                                type="number"
                                id="benfAcctNum"
                                name="acctNum"
                                value={acctNum}
                                onChange={this.handleOnChange}
                                minLength="10"
                                maxLength="10"
                                // disabled={elementsState}
                                placeholder="enter account number"
                                required
                            />
                            {errors.acctNum && (
                              <span className="error-message">{errors.acctNum}</span>
                            )}

                            <label htmlFor="selectOps" className="transfer-label extra" id="admin-transc-label">
                                Select Operation
                            </label>
                            <select 
                              name="status" value={status}  
                              onChange={this.handleOnChange} 
                              className="admin-select"
                              id="selectOps"
                               required>
                              <option value="">Select an operation</option> 
                              <option value="FROZEN">FROZEN</option>
                              <option value="SUSPENDED">SUSPENDED</option>
                              <option value="DEACTIVATED">DEACTIVATED</option>
                              <option value="BLOCKED">BLOCKED</option>
                              <option value="ACTIVE">ACTIVE</option>
                            </select>

                            <label htmlFor="pin" className="transfer-label extra" id="admin-transc-label">
                            Pin{" "}
                            </label>
                            <input
                            type="number"
                            className="trans-pin"
                            id="pin"
                            name="pin"
                            value={pin}
                            onChange={this.handleOnChange}
                            placeholder="enter four to eight digits transfer pin"
                            // disabled={elementsState}
                            required
                            />
                            {errors.pin && <span className="error-message">{errors.pin}</span>}
                        
                            </div>
                            <button type="submit" className={opsSubmitBtn} id="admin-transc-btn">
                            Submit
                          </button>
                        </form>
                    </div>
                </div>
            </div>    
        );
    }
}

Operation.propTypes = {
  operationAction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
 };
 
 const mapStateToProps = (state) => ({
   errors: state.errors,
   response: state.admin.operation
 });
 
 export default connect(mapStateToProps, {operationAction})(Operation);