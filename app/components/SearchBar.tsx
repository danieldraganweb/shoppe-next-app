import React from "react";
import styles from "../styles/components/SearchBar.module.scss";
import SearchSVG from "./SearchSVG";

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <SearchSVG />
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
