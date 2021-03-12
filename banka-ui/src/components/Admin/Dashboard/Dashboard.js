import React, {Component} from 'react';
import Navbar from '../Layout/Navbar/Navbar';

import Sidebar from '../Layout/Sidebar/Sidebar';
import "./Dashboard.css";

class Dashboard extends Component {

    render() {
        return(
          <div className="admin-dashboard">
            <Sidebar className="admin-dashboard-sidebar"/>
            <div className="admin-main-dashboard">
            <Navbar/>
             <div className="admin-main-content">
               <h1>Hello</h1>
               <p>World</p>
             </div>
            </div>
          </div>
        );
    }
}

export default Dashboard;