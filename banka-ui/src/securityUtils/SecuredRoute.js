import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SecuredRoute = ({ component: Component, user, ...otherProps }) => (
  <Route
    {...otherProps}
    render={(props) =>
      user.isValidToken ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

SecuredRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.login,
});

export default connect(mapStateToProps)(SecuredRoute);
