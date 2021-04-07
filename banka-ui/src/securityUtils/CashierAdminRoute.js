import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CashierAdminRoute = ({ component: Component, user, ...otherProps }) => (
  <Route
    {...otherProps}
    render={(props) => {
        if (user.isValidToken) {
            if(user.loginCredentials.roles.includes("ROLE_CASHIER") || user.loginCredentials.roles.includes("ROLE_ADMIN")) {
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
);

CashierAdminRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.login,
});

export default connect(mapStateToProps)(CashierAdminRoute);