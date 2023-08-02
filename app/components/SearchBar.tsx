import React from "react";
import styles from "../styles/components/SearchBar.module.scss";
import SearchSVG from "./SearchSVG";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBarWrapper}>
      <div className={styles.searchBarContainer}>
        <SearchSVG />
        <label htmlFor="search"></label>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
