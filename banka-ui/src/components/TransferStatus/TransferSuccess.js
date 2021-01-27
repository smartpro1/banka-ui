import React, { Component } from 'react'
import "./TransferSuccess.css";

class TransferSuccess extends Component {
    render() {
        return (
            <div className="transfer-success">
             <div className="detail-div">
                <div className="circle white">
                    <div className="circle green">
                      <div className="status-info-success-mark trans-mark">
                      </div>
                    </div>
                </div>
                <h3>Transaction Successful</h3>
                <p className="trans-amt"><sup className="trans-sup">NGN</sup> 5000.00 </p>
                <p className="sent-to">was sent to</p>
                <p className="trans-name">Akeni Promise Oberoro</p>
                <p className="trans-num">0011223344</p>
                
                <hr className="hr"/>
                
              <div className="ref-time">
               <p>Date & Time: 2017-07-24 08:37PM</p>
               <p>Ref number: 736483929246</p>
              </div>
              </div>
              
            </div>
        )
    }
}

export default  TransferSuccess;