import { useState } from "react";

export const useFavourites = ({ setShowDetail }) => {
  const [favouritesProducts, setFavouritesProducts] = useState([]);

  const addToFavourites = (favouriteProduct) => {
    setFavouritesProducts((prev) => {
      return [...prev, favouriteProduct];
    });
    setShowDetail(false);
  };

  const removeFromFavourites = (id) => {
    setFavouritesProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return [favouritesProducts, addToFavourites, removeFromFavourites];
};
