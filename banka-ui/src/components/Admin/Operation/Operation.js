import React, {Component} from 'react';

import Sidebar from '../Layout/Sidebar/Sidebar';
import Navbar from '../Layout/Navbar/Navbar';
import "./Operation.css";

class Operation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          acctNum: "",
          pin: "",
          status: "DEACTIVATED",
          errors: {},
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
        const { acctNum, pin, status} = this.state;
        const adminResponse = window.confirm(`Are you sure you want to set this user's status to ${status}`)
        if (!adminResponse) {
           return;
        }
        // this.setState({ isLoading: true });
       
        const transferDetails = {
          acctNum,
          status,
          pin,
         
        };
        const {withdrawalAction} = this.props;
        console.log(transferDetails);
       // withdrawalAction(transferDetails);
        // console.log(response);
        // this.setState({response:response});
        // console.log(this.state.response);
        //const { transferFundsAction, history } = this.props;
        // transferFundsAction(transferDetails, history);
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
           // isLoading,
            errors,
           
          } = this.state;
        return(
            <div className="admin-dashboard">
                <Sidebar className="admin-dashboard-sidebar"/>
                <div className="admin-main-dashboard">
                    <Navbar/>
                    <div className="init-transc">
                        <form className="init-transc-form" onSubmit={this.handleOnSubmit}>
                            <h2 id="signup-h2">Operation</h2>
                            {/*isLoader*/}
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
                            <button type="submit" className="transfer-btn" id="admin-transc-btn">
                            Submit
                          </button>
                        </form>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Operation;