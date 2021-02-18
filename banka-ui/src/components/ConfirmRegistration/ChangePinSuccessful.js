import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

const ChangePinSuccessful = (props) => {

    const fullname = props.login.fullname;
    const mesg = (
        <div>
        <h3 className="confirm-h3">Congratulations <span className="info-change-pin">{fullname}</span>, your pin was successfully changed.</h3>
        <p className="confirm-p">You can now make transfers with your new pin.</p>
        </div>
    );
    return (
        <div className="confirm-sth">
           <h1 className="confirm-h1">Change Pin Successful</h1>
           <SuccessMessage message={mesg}/>
           <Link to="/dashboard" className="trans-btn got-it-btn">
            Back To Dashboard
           </Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    login: state.login.loginCredentials,
  });
  
  export default connect(mapStateToProps, null)(ChangePinSuccessful);