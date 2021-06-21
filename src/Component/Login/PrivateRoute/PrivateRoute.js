import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { postContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [postDetails, setPostDetails] = useContext(postContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        postDetails.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
