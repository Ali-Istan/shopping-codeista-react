import React, { useEffect, useState } from "react";
// import { useProducts } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";
import Card from "../Components/Card";
import Loader from "../components/Loader";

import {
  createQueryObject,
  filterProduct,
  getInitialQuery,
  searchProducts,
} from "../helpers/helpers";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/ProductSlice";

function ProductsPage() {
  const [displayed, setDisplaayed] = useState([]);
  const [search, setSearch] = useState("");
  const [quary, setQuary] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplaayed(products);

    setQuary(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(quary);
    setSearch(quary.search || "");
    let finalProducts = searchProducts(products, quary.search);
    let finalProductsCAT = filterProduct(finalProducts, quary.catergories);
    setDisplaayed(finalProductsCAT);
  }, [quary]);

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        setQuary={setQuary}
        quary={quary}
      />
      <div className={styles.container}>
        <div className={styles.products}>
          {isLoading && <Loader />}
          {displayed.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
        <Sidebar setQuary={setQuary} quary={quary} />
      </div>
    </>
  );
}

export default ProductsPage;
