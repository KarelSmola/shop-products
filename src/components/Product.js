import React from "react";

import classes from "./Product.module.css";

const Product = ({ product, title, img, rating, price, onShowDetail }) => {
  return (
    <li className={classes["product-wrapper"]}>
      <h1 className={classes["product-title"]}>{title}</h1>
      <figure className={classes["img-wrapper"]}>
        <img className={classes["product-img"]} src={img} alt={title} />
      </figure>
      <p className={classes["product-rating"]}>{rating} stars</p>
      <p className={classes["product-price"]}>$ {price}</p>
      <button
        onClick={() => {
          onShowDetail(product);
        }}
      >
        Show detail
      </button>
    </li>
  );
};

export default Product;
