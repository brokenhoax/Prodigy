import React from "react";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchBar}>
        <input
          type="text"
          onChange={props.onChange}
          className={styles.searchBarInput}
          placeholder="Search by Topic"
          aria-label="search"
          value={props.search}
        />
        <button className={styles.searchBarSubmit}>
          <FontAwesomeIcon
            icon={faSearch}
            className={styles.fontIcon}
            size="lg"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
