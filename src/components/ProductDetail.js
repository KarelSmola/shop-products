import React from "react";

const ProductDetail = ({
  title,
  image,
  brand,
  price,
  rating,
  description,
  onCloseDetail,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{brand}</p>
      <p>{price} $</p>
      <p>{rating} ⭐️</p>
      <p>{description}</p>
      <button onClick={onCloseDetail}>Close detail</button>
    </div>
  );
};

export default ProductDetail;
