import React, { Component } from "react";
import { Link } from "react-router-dom";

import error404Img from '../../assets/images/error_404.jpg';
import  './Error404.css';

class Error404 extends Component {

    
    render() {
        console.log(this.props);
        return (
            <div>
                  <img src={error404Img} alt="error404" id="error404-image"/>
                <div className="error404msg">
                  <p className="p404">The page you have requested was not found on this server.</p>
                  <Link to="/" className="error404-btn">
                     OK
                 </Link>
                </div>
            </div>
        );
    }
}

export default Error404;

// Dashboard.propTypes = {
//     logoutAction: PropTypes.func.isRequired,
//     login: PropTypes.object.isRequired,
//   };
  
//   const mapStateToProps = (state) => ({
//     login: state.login,
//     transferFund: state.transferFund.transferFund,
//   });
  
//   export default connect(mapStateToProps, { logoutAction })(Dashboard);