import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SecuredRoute = ({ component: Component, user, ...otherProps }) => (

  <Route
    {...otherProps}
    render={(props) => {
        if (user.isValidToken) {
            if(user.loginCredentials.roles.includes("ROLE_CASHIER") || user.loginCredentials.roles.includes("ROLE_ADMIN")) {
               return  <Redirect to="/admin-dashboard" />
            } else {
              return <Component {...props} />
            }
        } else {
          return  <Redirect to="/" />
        }
    }
  } 
  />
  
  // <Route
    
  //   {...otherProps}
  //   render={(props) =>
  //     user.isValidToken ? <Component {...props} /> : <Redirect to="/" />
      
  //   }
  // />

  // <Route
  //   {...otherProps}
  //   render={(props) => {
  //       if (user.isValidToken) {
  //           if(user.roles.includes("ROLE_USER")) {
  //              return <Component {...props} />
  //           } else {
  //             return  <Redirect to="/admin-dashboard" />
  //           }
  //       } else {
  //         return  <Redirect to="/" />
  //       }
  //   }
  // } 
  // />
);

SecuredRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.login,
});

export default connect(mapStateToProps)(SecuredRoute);

/**
 * <Route
    {...otherProps}
    render={(props) => {
        if (user.isValidToken) {
            if(user.roles.includes("ROLE_CASHIER") || user.roles.includes("ROLE_ADMIN")) {
               return <Component {...props} />
            } else {
              return  <Redirect to="/dashboard" />
            }
        } else {
          return  <Redirect to="/" />
        }
    }
  } 
  />
 */