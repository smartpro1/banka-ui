import React from 'react';
import { Link } from "react-router-dom";
import './SessionTimeout.css';

export const SessionTimeOut = () => {
    return (

         <div className="session-div">
           <h3 className="session-h3">Session Timeout</h3>
           <div className="session-mesg">
              <p> <i className="fa fa-info-circle session-info"></i> Your session timed out. Please login again</p>
             <Link to="/" className="session-btn">
                OK
              </Link>
             <div className="clear"></div>
        </div>  
         
        </div>
    );
}