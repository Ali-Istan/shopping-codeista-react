import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/ProductSlice";
import cardReducer from "../features/card/CardSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    card: cardReducer,
  },
});

export default store;
