import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";

import PageNotFound from "./Pages/404";
import ProductsProvider from "./context/ProductsContext";
// import Card from "./Components/Card";
// import CardProvider from "./context/CardContext";
import Layout from "./Layout/Layout";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  return (
    // <CardProvider>

    //<ProductsProvider>
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
    //  </ProductsProvider>

    //</CardProvider>
  );
}

export default App;
