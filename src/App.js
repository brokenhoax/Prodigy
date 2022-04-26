import React, { useState, useEffect } from "react";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import styles from "./components/navbar/Navbar.module.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    favorite: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "https://frozen-woodland-47284.herokuapp.com/user/isTokenValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get(
          "https://frozen-woodland-47284.herokuapp.com/users/",
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token,
          user: userRes.data,
        });
        console.log(userRes.data);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className="grid-container">
      <UserContext.Provider value={{ userData, setUserData }}>
        <WebinarProvider>
          <Logo className="logo" />
          <Topbar className="topbar" />
          <Router>
            <div>
              <nav className={styles.navi}>
                <NavLink
                  to="/login"
                  className={styles.navLink}
                  activeStyle={{
                    color: "#ffbd69",
                  }}
                >
                  <span>
                    <FontAwesomeIcon
                      className={styles.navIcon}
                      icon={faUser}
                      size="2x"
                    />
                  </span>
                </NavLink>{" "}
                <NavLink
                  className={styles.navLink}
                  activeStyle={{
                    color: "#ffbd69",
                  }}
                  to="/webinars"
                >
                  <span>
                    <FontAwesomeIcon
                      className={styles.navIcon}
                      icon={faTv}
                      size="2x"
                    />
                  </span>
                </NavLink>{" "}
                <NavLink
                  className={styles.navLink}
                  activeStyle={{
                    color: "#ffbd69",
                  }}
                  to="/schedule"
                >
                  <span>
                    <FontAwesomeIcon
                      className={styles.navIcon}
                      icon={faCalendarAlt}
                      size="2x"
                    />
                  </span>
                </NavLink>{" "}
                <NavLink
                  className={styles.navLink}
                  activeStyle={{
                    color: "#ffbd69",
                  }}
                  to="/create"
                >
                  <span>
                    <FontAwesomeIcon
                      className={styles.navIcon}
                      icon={faVideo}
                      size="2x"
                    />
                  </span>
                </NavLink>{" "}
                <NavLink
                  className={styles.navLink}
                  activeStyle={{
                    color: "#ffbd69",
                  }}
                  to="/favorites"
                >
                  <span>
                    <FontAwesomeIcon
                      className={styles.navIcon}
                      icon={faHeart}
                      size="2x"
                    />
                  </span>
                </NavLink>{" "}
                <NavLink
                  className={styles.navLink}
                  activeStyle={{
                    color: "#ffbd69",
                  }}
                  to="/stats"
                >
                  <span>
                    <FontAwesomeIcon
                      className={styles.navIcon}
                      icon={faChartPie}
                      size="2x"
                    />
                  </span>
                </NavLink>{" "}
              </nav>
            </div>
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
            </Switch>{" "}
          </Router>
        </WebinarProvider>
      </UserContext.Provider>
    </div>
  );
}
