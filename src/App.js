import React, { useState, useEffect } from "react";
import Sort from "./components/Sort";
import ProductsList from "./components/ProductsList";

const url = "https://fakestoreapi.com/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("title");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchData();
  }, []);

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

  return (
    <div>
      <Sort onSortBy={sortProducts} sort={sortBy} />
      <ProductsList products={sortedProducts} />
    </div>
  );
};

export default App;
