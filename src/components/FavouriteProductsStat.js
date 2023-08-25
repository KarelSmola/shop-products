import React from "react";

import classes from "./FavouriteProductsStat.module.css";

const FavouriteProductsStat = ({
  productsTotalPrice,
  productsAverageRating,
}) => {
  return (
    <div className={classes.statistics}>
      <h1>Statistics</h1>
      <div className={classes["statistics-info"]}>
        <p>
          Your favourites products are for <span>{productsTotalPrice} $</span>
        </p>
        <p>
          Average rating of your products is{" "}
          <span>{productsAverageRating}</span> ⭐️
        </p>{" "}
      </div>
    </div>
  );
};

export default FavouriteProductsStat;
