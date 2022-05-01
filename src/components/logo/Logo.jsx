import React, { Component } from "react";
import styles from "./Logo.module.css";
import { HashRouter as Router, NavLink } from "react-router-dom";

class Logo extends Component {

  render() {
    return (
      <Router>
        <NavLink
          to="/login"
          className={styles.logo}
          activeStyle={{
            color: "#ffbd69",

          }}
        >
          {"V"}
        </NavLink>
      </Router>
    );
  }
}

export default Logo;
