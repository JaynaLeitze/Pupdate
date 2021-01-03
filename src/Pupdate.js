import { React } from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
// import { Route } from "./components/auth/Register";
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./components/ApplicationViews";
import { Register } from "./components/auth/Register";
import { PetList } from "./components/pets/PetList";
import "./Pupdate.css";
import logo from "./components/auth/Pupdate-logo.png";

function Header() {
  console.log(logo);
  return <image src={logo} />;
}
export default Header;

export const Pupdate = () => {
  return (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("pet_parent")) {
            return (
              <>
                {/* <Route render={(props) => <NavBar {...props} />} /> */}

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
    </>
  );
};
