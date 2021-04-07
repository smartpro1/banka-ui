import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

import "./ConfirmRegistration.css";

const ConfirmRegistration = (props) => {
    const {fullname} = props;
    const mesg = (
        <div>
        <h3 className="confirm-h3">Congratulations, <span className="info-change-pin">{fullname}</span> your  registration is now complete.</h3>
        <p className="confirm-p">Please login and <span className="info-change-pin">change your default pin</span> for you to be fully activated!</p>
        <p className="confirm-p">When you registered, a default pin was sent to your mail, please login and on the dashboard click on 
            the hamburger menu and select change pin, enter your default pin and a new pin of your choice.</p>
        </div>
    );
    return (
        <div className="confirm-sth">
           <h1 className="confirm-h1">Registration Complete</h1>
           <SuccessMessage message={mesg}/>
           <Link to="/" className="trans-btn got-it-btn">
                Login
              </Link>
        </div>
    );
}

  
  const mapStateToProps = (state) => ({
    fullname: state.fullname.fullname,
  });
  
  export default connect(mapStateToProps, null)(ConfirmRegistration);

