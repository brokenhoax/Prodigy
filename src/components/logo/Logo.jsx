import React, { Component } from "react";
import styles from "./Logo.module.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

class Logo extends Component {
  state = {
    test: 0,
  };

  refreshPage = () => {
    setInterval(function () {
      window.location.reload();
    }, 200);
  };

  render() {
    return (
      <Router>
        <NavLink to="/home" className={styles.logo} onClick={this.refreshPage}>
          V
        </NavLink>
      </Router>
    );
  }
}

export default Logo;
