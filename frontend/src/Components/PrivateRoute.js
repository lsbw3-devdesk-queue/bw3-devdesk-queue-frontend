import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("jwt") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = ({ token }) => ({
    token
});

export default withRouter(
    connect (
        mapStateToProps,
        {}
    )(PrivateRoute)
);