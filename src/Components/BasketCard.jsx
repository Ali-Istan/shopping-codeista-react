import React from "react";
import { ShortenText } from "../helpers/helpers";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/card/CardSlice";

function BasketCard({ data, clickHandler }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} />
      <p>{ShortenText(data.title)}</p>
      <p>{data.price}</p>
      <div className={styles.actions}>
        {data.quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{data.quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
