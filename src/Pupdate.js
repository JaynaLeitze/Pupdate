import { React } from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
// import { Route } from "./components/auth/Register";
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./components/ApplicationViews";
import { Register } from "./components/auth/Register";
import { PetList } from "./components/pets/PetList";
import "./Pupdate.css";
import logo from "./components/Pupdate.png";

export const Pupdate = () => {
  const image = logo;
  return (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("pet_parent")) {
            return (
              <>
                {/* <Route render={(props) => <NavBar {...props} />} /> */}
                <img className="logo" src={image} />
                <Route render={(props) => <ApplicationViews {...props} />} />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      {/* <img className="logo" src={image} /> */}
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
    </>
  );
};
