import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../Services/config";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // api.get('/products').then(res => setProducts(res))
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res);
      } catch {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => useContext(ProductsContext);

const useProductDetails = (id) => {
  const { products } = useContext(ProductsContext);
  return products.find((product) => product.id === id);
};

export default ProductsProvider;
export { useProducts, useProductDetails };
