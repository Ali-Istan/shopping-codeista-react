import React from "react";
import { createQueryObject } from "../helpers/helpers";
import { FaListUl } from "react-icons/fa";
import styles from "./sidebar.module.css";
import { category } from "../Constants/list";

function Sidebar({ quary, setQuary }) {
  const CatHandler = (event) => {
    const { tagName } = event.target;
    const catergories = event.target.innerText.toLowerCase().trim();

    if (tagName !== "LI") {
      return;
    }
    setQuary((quary) => createQueryObject(quary, { catergories }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={CatHandler}>
        {category.map((cat) => (
          <li
            key={cat.id}
            className={
              cat.type.toLowerCase() === quary.catergories
                ? styles.selected
                : ""
            }
          >
            {cat.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
