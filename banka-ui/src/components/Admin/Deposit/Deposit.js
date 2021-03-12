import React, {Component} from 'react';

import InitiateTransaction from '../InitiateTransaction/InitiateTransaction';
import Sidebar from '../Layout/Sidebar/Sidebar';
import Navbar from '../Layout/Navbar/Navbar';


class Deposit extends Component {
   
    render() {
        const title = "Deposit";
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

export default Deposit;