import React from "react";

import Button from "./UI/Button";
import classes from "./FavouritesList.module.css";

const FavouritesList = ({ favouritesProducts, onRemoveFromFavourites }) => {
  return (
    <ul className={classes["favourite-products-list"]}>
      {favouritesProducts.map((favourite) => (
        <li className={classes["favourite-product"]} key={favourite.id}>
          <div className={classes["favourite-product-info"]}>
            <p>{favourite.title}</p>
            <p>{favourite.price} $</p>
            <p>{favourite.rating} ⭐️</p>
          </div>
          <Button
            className={classes["remove-btn"]}
            onClick={() => {
              onRemoveFromFavourites(favourite.id);
            }}
          >
            ❌
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default FavouritesList;
