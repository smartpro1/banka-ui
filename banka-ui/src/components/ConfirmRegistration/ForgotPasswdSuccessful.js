import React from "react";
import { Link } from "react-router-dom";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

import "./ConfirmRegistration.css";

const ForgotPasswdSuccessful = () => {
    const mesg = (
        <div>
        <h3 className="confirm-h3">Congratulations, your password reset request was successful.</h3>
        <p className="confirm-p">A password reset mail has been sent to the email address you supplied.</p>
        </div>
    );
    return (
        <div className="confirm-sth">
           <h1 className="confirm-h1">Password Reset Request Successful</h1>
           <SuccessMessage message={mesg}/>
           <Link to="/" className="trans-btn got-it-btn">
                OK
              </Link>
        </div>
    );
}


export default ForgotPasswdSuccessful;