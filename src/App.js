import React, { useState, useEffect } from "react";
import Sort from "./components/Sort";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";

import MainWrapper from "./components/UI/MainWrapper";

// const url = "https://fakestoreapi.com/products";
const url = "https://dummyjson.com/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
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

  const showDetailProduct = (product) => {
    console.log(product);
    setShowDetail({
      title: product.title,
      image: product.images[0],
      brand: product.brand,
      price: product.price,
      rating: product.rating,
      description: product.description,
    });
  };

  const { title, image, brand, price, rating, description } = showDetail;

  const closeDetail = () => {
    setShowDetail(false);
  };

  return (
    <MainWrapper>
      <Sort onSortBy={sortProducts} sort={sortBy} />
      <ProductsList
        products={sortedProducts}
        onShowDetail={showDetailProduct}
      />
      {showDetail && (
        <ProductDetail
          title={title}
          image={image}
          brand={brand}
          price={price}
          rating={rating}
          description={description}
          onCloseDetail={closeDetail}
        />
      )}
    </MainWrapper>
  );
};

export default App;
