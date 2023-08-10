import React from "react";

import classes from "./Product.module.css";

const Product = ({ title, img, rating, price, showInfo }) => {
  return (
    <li className={classes["product-wrapper"]}>
      <h1 className={classes["product-title"]}>{title}</h1>
      <figure className={classes["img-wrapper"]}>
        <img className={classes["product-img"]} src={img} alt={title} />
      </figure>
      <p className={classes["product-rating"]}>{rating} stars</p>
      <p className={classes["product-price"]}>$ {price}</p>
      <button>Show more info</button>
      {showInfo ? <p>Description</p> : ""}
    </li>
  );
};

export default Product;
