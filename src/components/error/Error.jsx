import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import styles from "./Error.module.css";

const PageNotFound = () => {
  return (
    <div className="main">
      <div className={styles.error}>
        <div>
          ¯\_(ツ)_/¯ <Link to="/"></Link>{" "}
        </div>

        <div>
          Page Not Found <Link to="/"></Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
