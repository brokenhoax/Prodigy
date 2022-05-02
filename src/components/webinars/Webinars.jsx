import React, { useState } from "react";
import Cards from "../cards/Cards";
import styles from "./Webinars.module.css";
import Search from "../search/Search";
import { BrowserRouter as Router } from "react-router-dom";

const Webinars = () => {
  // Search Bar
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Hi! From: onChange", event.target.value);
  };

  return (
    <Router>
      <div className="main">
        <Search onChange={handleChange} value={searchTerm} />
        <Cards
          className={styles.webinars}
          search={searchTerm}
          header={"Upcoming Webinars"}
        />
      </div>
    </Router>
  );
};

export default Webinars;
