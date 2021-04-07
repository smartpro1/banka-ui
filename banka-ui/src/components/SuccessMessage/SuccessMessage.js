import React from "react";

import "./SuccessMessage.css";

const SuccessMessage = ({message}) => {
   
    return (
        <div className="success-mesg-div">
                <div className="circle white">
                    <div className="circle green">
                      <div className="status-info-success-mark trans-mark">
                        </div>  
                        {/*<div className="success-white-tick">
                        
    // </div>  */}    
                    </div>
                </div>
                {message}
        </div>        
    );
}

export default SuccessMessage;

