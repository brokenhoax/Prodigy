import React, { useState } from "react";
import Cards from "../cards/Cards";
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
      <div className="main">
        <Search onChange={handleChange} value={searchTerm} />
        <Cards search={searchTerm} header={"Favorites"} />
      </div>
    </Router>
  );
}

export default Favorites;
