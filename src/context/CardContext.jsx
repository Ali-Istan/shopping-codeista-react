import React, { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helpers/helpers";

const CardContext = createContext();
const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
        checkout: false,
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      throw new Error("Invalid action type");
  }
};

function CardProvider({ children }) {
  const [state, dispath] = useReducer(reducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispath }}>
      {children}
    </CardContext.Provider>
  );
}

const useCard = () => {
  const { state, dispath } = useContext(CardContext);
  return [state, dispath];
};

export default CardProvider;
export { useCard };
