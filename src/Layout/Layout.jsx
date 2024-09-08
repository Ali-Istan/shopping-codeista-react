import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCard } from "../context/CardContext";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const state = useSelector((store) => store.card);
  console.log(state);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">CodeIsta</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />

            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Copyright &copy; 2023</p>
      </footer>
    </>
  );
}

export default Layout;
