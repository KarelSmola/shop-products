import { useState } from "react";

export const useSort = ({ products }) => {
  const [sortBy, setSortBy] = useState("title");

  const sortProducts = (sortValue) => {
    setSortBy(sortValue);
  };

  let sortedProducts;

  if (sortBy === "title") sortedProducts = products;

  if (sortBy === "price")
    sortedProducts = products
      .slice()
      .sort(
        (productA, productB) => Number(productA.price) - Number(productB.price)
      );

  if (sortBy === "rating")
    sortedProducts = products
      .slice()
      .sort(
        (productA, productB) =>
          Number(productA.rating.rate) - Number(productB.rating.rate)
      );

  return [sortProducts, sortedProducts, sortBy];
};
