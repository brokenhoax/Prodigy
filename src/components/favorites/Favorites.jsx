import React, { useState } from "react";
import Cards from "../cards/Cards";
import styles from "./Favorites.module.css";
import searchStyle from "../search/Search.module.css";
import Search from "../search/Search";

import { BrowserRouter as Router } from "react-router-dom";

function Favorites() {
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
        header={"Favorites"}
      />
      <Search
        className={searchStyle.test}
        onChange={handleChange}
        value={searchTerm}
      />
    </Router>
  );
}

export default Favorites;
