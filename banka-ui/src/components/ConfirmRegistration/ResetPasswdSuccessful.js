import React from "react";
import { Link } from "react-router-dom";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

import "./ConfirmRegistration.css";

const ResetPasswdSuccessful = () => {
    const mesg = (
        <div>
        <h3 className="confirm-h3">Congratulations, your password reset  was successful.</h3>
        <p className="confirm-p">You can now login with this new password.</p>
        </div>
    );
    return (
        <div className="confirm-sth">
           <h1 className="confirm-h1">Password Reset Successful</h1>
           <SuccessMessage message={mesg}/>
           <Link to="/" className="trans-btn got-it-btn">
                OK
              </Link>
        </div>
    );
}


export default ResetPasswdSuccessful;