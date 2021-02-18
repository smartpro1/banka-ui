import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

import "./ConfirmRegistration.css";

const RegistrationSuccessful = (props) => {
    const {fullname} = props;
    const mesg = (
        <div>
        <h3 className="confirm-h3">Congratulations <span className="info-change-pin">{fullname}</span> your  registration was successful.</h3>
        <p className="confirm-p">Please check the mail you supplied when registering and click on the link in order to confirm your registration.</p>
        </div>
    );
    return (
        <div className="confirm-sth">
           <h1 className="confirm-h1">Registration Successful</h1>
           <SuccessMessage message={mesg}/>
           <Link to="/" className="trans-btn got-it-btn">
                OK
              </Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    fullname: state.fullname.fullname,
  });
  
  export default connect(mapStateToProps, null)(RegistrationSuccessful);