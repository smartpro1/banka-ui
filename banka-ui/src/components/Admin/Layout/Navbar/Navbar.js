import React, {Component} from 'react';

import './Navbar.css';



class Navbar extends Component {
  
    render() {
        return(
            <div className="admin-navbar">
              <div className="admin-navbar-left">
               <div className="admin-hamburger">
                 <p className="hamburger-p">hello</p>
               </div>
               <input type="text" placeholder="Enter keywords"/>
              </div>
              <div className="admin-navbar-right">
                <p>Navbar right</p>
              </div>
            </div>
        );
    }
}

export default Navbar;