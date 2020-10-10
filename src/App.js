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
import Profile from "./components/auth/profile/Profile";
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
            <Logo />
            <Topbar />
            <Navbar />
            <Switch>
              <Route path="/" exact={true} component={Webinars} />
              <Route path="/home" exact={true} component={Webinars} />
              <Route path="/auth" exact={true} component={AuthOptions} />
              <Route path="/register" exact={true} component={Register} />
              <Route path="/profile" exact={true} component={Profile} />
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
              <Route exact path="/create" component={CreateWebinar} />
              <Route path="/stats" exact={true} component={Stats} />
              <Route path="/schedule" exact={true} component={Schedule} />
              <Route path="/404" component={PageNotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </WebinarProvider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
