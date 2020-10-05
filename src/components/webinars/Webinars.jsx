import React, { useState } from "react";
import Cards from "../cards/Cards";
import styles from "./Webinars.module.css";
import searchStyle from "../search/Search.module.css";
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
      <Cards
        className={styles.webinars}
        search={searchTerm}
        header={"Upcoming Webinars"}
      />
      <Search
        className={searchStyle.test}
        onChange={handleChange}
        value={searchTerm}
      />
    </Router>
  );
};

export default Webinars;
