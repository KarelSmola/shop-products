import React from "react";

import classes from "./Product.module.css";

const Product = ({
  id,
  title,
  img,
  rating,
  price,
  description,
  curOpen,
  onOpen,
}) => {
  const showInfo = id === curOpen;

  const showDescription = () => {
    onOpen(showInfo ? null : id);
  };

  return (
    <li className={classes["product-wrapper"]}>
      <h1 className={classes["product-title"]}>{title}</h1>
      <figure className={classes["img-wrapper"]}>
        <img className={classes["product-img"]} src={img} alt={title} />
      </figure>
      <p className={classes["product-rating"]}>{rating} stars</p>
      <p className={classes["product-price"]}>$ {price}</p>
      <button onClick={showDescription}>Show more info</button>
      {showInfo ? (
        <p className={classes["product-description"]}>{description}</p>
      ) : (
        ""
      )}
    </li>
  );
};

export default Product;
