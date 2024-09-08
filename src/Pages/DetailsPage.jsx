import React, { useEffect } from "react";
import { useCard } from "../context/CardContext";
import { Link, useParams } from "react-router-dom";

// import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./DetailsPage.module.css";
import { useDispatch } from "react-redux";

function DetailsPage() {
  const { id } = useParams();
  const res = useSelector((state) =>
    state.products.products.find((item) => item.id === parseInt(id))
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (!res) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <img src={res.image} alt={res.title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{res.title}</h3>
        <p className={styles.description}>{res.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {res.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {res.price} $
          </span>
          <Link to="/">
            <FiArrowLeft />
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
