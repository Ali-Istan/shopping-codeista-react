import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Services/config";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return api.get("/products");
});

const productsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
