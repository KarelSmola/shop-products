import React from "react";

import Button from "./UI/Button";
import classes from "./ProductDetail.module.css";

const ProductDetail = ({
  id,
  title,
  image,
  brand,
  price,
  rating,
  description,
  onCloseDetail,
  onAddToFavourites,
  favourites,
  selectedId,
}) => {
  const handleAddToFavourite = () => {
    const favouriteProduct = {
      id,
      title,
      price,
      rating,
    };

    onAddToFavourites(favouriteProduct);
  };

  const isFavourite = favourites
    .map((favourite) => favourite.id)
    .includes(selectedId);

  return (
    <div className={classes["product-detail"]}>
      <h1>{title}</h1>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className={classes["detail-info"]}>
        <p>{brand}</p>
        <p>{price} $</p>
        <p>{rating} ⭐️</p>
        <p>{description}</p>
      </div>
      <div className={classes["button-wrapper"]}>
        <Button onClick={onCloseDetail}>Close detail</Button>
        {!isFavourite ? (
          <Button
            className={classes["favourites-btn"]}
            onClick={handleAddToFavourite}
          >
            Add to favourites
          </Button>
        ) : (
          <p className={classes["added-to-favourites"]}>Added to favourites</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
