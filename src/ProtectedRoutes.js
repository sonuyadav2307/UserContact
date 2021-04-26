import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const authentication = useSelector((state) => state.authentication.login);
  console.log("this is authentication", authentication);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authentication) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: `${process.env.PUBLIC_URL}/login`,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoutes;
