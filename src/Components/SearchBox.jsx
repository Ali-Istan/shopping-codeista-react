import React from "react";
import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helpers/helpers";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setQuary, quary }) {
  const searchHandler = () => {
    setQuary((quary) => createQueryObject(quary, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      ></input>
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
