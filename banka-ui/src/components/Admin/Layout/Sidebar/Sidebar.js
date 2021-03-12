import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './Sidebar.css';



class Sidebar extends Component {
  
    render() {
        return(
            <div className="admin-sidebar">
              <div className="admin-image"> <h3 className="admin-name">Akeni Promise</h3></div>
              <ul className="admin-sidebar-ul">
                <li className="admin-sidebar-li">
                  <NavLink
                    className="admin-sidebar-navlink"
                    exact
                    activeClassName="active"
                    to="/admin-dashboard"
                    >
                    <i className="fa fa-home" aria-hidden="true"></i>{" "}
                &nbsp;
                    Dashboard
                  </NavLink>
                </li>
                <li className="admin-sidebar-li">
                <NavLink
                  className="admin-sidebar-navlink"
                  exact
                  activeClassName="active"
                  to="/withdrawal"
                  >
                  <i className="fa fa-share fa-rotate-180" aria-hidden="true"></i>{" "}
                &nbsp;
                  Withdrawal
                </NavLink>
                </li>
                <li className="admin-sidebar-li">
                <NavLink
                  className="admin-sidebar-navlink"
                  exact
                  activeClassName="active"
                  to="/deposit"
                  >
                  <i className="fa fa-share" aria-hidden="true"></i>{" "}
                &nbsp;
                  Deposit
                </NavLink>
                </li>
                <li className="admin-sidebar-li">
                <NavLink
                  className="admin-sidebar-navlink"
                  exact
                  activeClassName="active"
                  to="/transaction"
                  >
                  <i className="fa fa-spinner" aria-hidden="true"></i>{" "}
                &nbsp;
                  Transaction
                </NavLink>
                </li>
                <li className="admin-sidebar-li">
                <NavLink
                  className="admin-sidebar-navlink"
                  exact
                  activeClassName="active"
                  to="/operation"
                  >
                  <i className="fa fa-lock" aria-hidden="true"></i>{" "}
                &nbsp;
                  Operation
                </NavLink>
              </li>
            </ul>

            </div>
        );
    }
}

export default Sidebar;