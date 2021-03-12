import React, {Component} from 'react';

import InitiateTransaction from '../InitiateTransaction/InitiateTransaction';
import Sidebar from '../Layout/Sidebar/Sidebar';
import Navbar from '../Layout/Navbar/Navbar';
import './Withdrawal.css';

class Withdrawal extends Component {

    render() {
        const title = "Withdraw";
        return(
            <div className="admin-dashboard">
                <Sidebar className="admin-dashboard-sidebar"/>
                <div className="admin-main-dashboard">
                    <Navbar/>
                    <InitiateTransaction title={title}/>
                </div>    
            </div>
        );
    }
}

export default Withdrawal;