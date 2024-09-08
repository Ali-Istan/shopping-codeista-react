import React from "react";

import BasketCard from "../Components/BasketCard";
import styles from "./CheckoutPage.module.css";
import BasketSideBar from "../Components/BasketSideBar";
import { useDispatch, useSelector } from "react-redux";
function CheckoutPage() {
  // const [state, dispath] = useCard();

  const state = useSelector((store) => store.card);

  if (!state.selectedItems.length) {
    return (
      <div className={styles.empty}>
        <h3>No items in the cart</h3>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state}></BasketSideBar>

      <div className={styles.basket}>
        {!!state.selectedItems &&
          state.selectedItems.map((item) => {
            return <BasketCard key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
}

export default CheckoutPage;
