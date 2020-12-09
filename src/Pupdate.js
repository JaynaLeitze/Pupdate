import { React } from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Route } from "./components/auth/Register";

export const Pupdate = () => {
  <>
    <Route
      render={() => {
        if (localStorage.getItem("pet_parent")) {
          return (
            <>
              <Route render={(props) => <NavBar {...props} />} />
              <Route render={(props) => <ApplicationViews {...props} />} />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login" render={(props) => <Login {...props} />} />
    <Route path="/register" render={(props) => <Register {...props} />} />
  </>;
};
