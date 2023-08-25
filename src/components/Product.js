import React from "react";

import Button from "./UI/Button";
import classes from "./Product.module.css";

const Product = ({
  product,
  title,
  img,
  rating,
  price,
  onToggleShowDetail,
  selectedProduct,
}) => {
  const isSelected = product.id === selectedProduct.id;

  return (
    <li
      className={
        isSelected
          ? `${classes["product-wrapper"]} ${classes["selected-product"]}`
          : classes["product-wrapper"]
      }
    >
      <h1 className={classes["product-title"]}>{title}</h1>
      <figure className={classes["img-wrapper"]}>
        <img className={classes["product-img"]} src={img} alt={title} />
      </figure>
      <p className={classes["product-rating"]}>{rating} stars</p>
      <p className={classes["product-price"]}>$ {price}</p>
      <Button
        onClick={() => {
          onToggleShowDetail(product);
        }}
      >
        {isSelected ? "Close detail" : "Show detail"}
      </Button>
    </li>
  );
};

export default Product;
