import React, { useState, useEffect } from "react";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./components/logo/Logo";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Stats from "./components/stats/Stats";
import Schedule from "./components/schedule/Schedule";
import Favorites from "./components/favorites/Favorites";
import Webinars from "./components/webinars/Webinars";
import LogIn from "./components/auth/login/Login";
import PageNotFound from "./components/error/Error";
import { WebinarProvider } from "../src/utils/WebinarContext";
import UserContext from "../src/utils/UserContext";
import CreateWebinar from "./components/createWebinar/CreateWebinar";
import Register from "./components/auth/register/Register";
import AuthOptions from "./components/auth/authOptions/authOptions";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:3000/user/isTokenValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <div className="grid-container">
        <UserContext.Provider value={{ userData, setUserData }}>
          <WebinarProvider>
            <Logo className="logo" />
            <Topbar className="topbar" />
            <Navbar className="navbar" />
            <Switch>
              <Route
                path="/"
                className="main"
                exact={true}
                component={Webinars}
              />
              <Route
                path="/home"
                className="main"
                exact={true}
                component={Webinars}
              />
              <Route
                path="/auth"
                className="main"
                exact={true}
                component={AuthOptions}
              />
              <Route
                path="/register"
                className="main"
                exact={true}
                component={Register}
              />
              <Route
                path="/login"
                className="main"
                exact={true}
                component={LogIn}
              />
              <Route
                path="/webinars"
                exact={true}
                component={Webinars}
                className="webinars"
              />
              <Route
                path="/favorites"
                exact={true}
                component={Favorites}
                className="webinars"
              />
              <Route
                exact
                path="/create"
                className="main"
                component={CreateWebinar}
              />
              <Route
                path="/stats"
                className="main"
                exact={true}
                component={Stats}
              />
              <Route
                path="/schedule"
                className="main"
                exact={true}
                component={Schedule}
              />
              <Route path="/404" component={PageNotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </WebinarProvider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
