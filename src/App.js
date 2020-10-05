import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./components/logo/Logo";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Stats from "./components/stats/Stats";
import Schedule from "./components/schedule/Schedule";
import Favorites from "./components/favorites/Favorites";
import Webinars from "./components/webinars/Webinars";
import Profile from "./components/profile/Profile";
import PageNotFound from "./components/error/Error";
import { WebinarProvider } from "../src/utils/WebinarContext";
import { UserProvider } from "../src/utils/UserContext";
import CreateWebinar from "./components/createWebinar/CreateWebinar";

export default function App() {
  return (
    <Router>
      <div className="grid-container">
        <UserProvider>
          <WebinarProvider>
            <Logo />
            <Topbar />
            <Navbar />
            <Switch>
              <Route path="/" exact={true} component={Webinars} />
              <Route path="/home" exact={true} component={Webinars} />
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
        </UserProvider>
      </div>
    </Router>
  );
}
