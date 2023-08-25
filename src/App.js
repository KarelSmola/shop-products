import React, { useState, useEffect } from "react";
import Sort from "./components/Sort";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import FavouritesList from "./components/FavouritesList";

import MainWrapper from "./components/UI/MainWrapper";
import FavouriteProductsStat from "./components/FavouriteProductsStat";

// const url = "https://fakestoreapi.com/products";
const url = "https://dummyjson.com/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const [showDetail, setShowDetail] = useState(false);
  const [favouritesProducts, setFavouritesProducts] = useState([]);

  const productsTotalPrice = favouritesProducts.length
    ? favouritesProducts.reduce((acc, cur) => acc + cur.price, 0)
    : "0";

  const productsAverageRating = favouritesProducts.length
    ? Number(
        favouritesProducts.reduce((acc, cur) => acc + cur.rating, 0) /
          favouritesProducts.length
      ).toFixed(2)
    : "0";

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

  const toggleShowDetail = (product) => {
    if (!showDetail) {
      setShowDetail({
        id: product.id,
        title: product.title,
        image: product.images[0],
        brand: product.brand,
        price: product.price,
        rating: product.rating,
        description: product.description,
      });
    } else {
      closeDetail();
    }
  };

  const { id, title, image, brand, price, rating, description } = showDetail;

  const closeDetail = () => {
    setShowDetail(false);
  };

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

  return (
    <MainWrapper>
      <Sort onSortBy={sortProducts} sort={sortBy} />
      <ProductsList
        products={sortedProducts}
        onToggleShowDetail={toggleShowDetail}
        selectedProduct={showDetail}
      />
      {showDetail && (
        <ProductDetail
          id={id}
          title={title}
          image={image}
          brand={brand}
          price={price}
          rating={rating}
          description={description}
          onCloseDetail={closeDetail}
          onAddToFavourites={addToFavourites}
          favourites={favouritesProducts}
          selectedId={showDetail.id}
        />
      )}
      <div>
        <FavouriteProductsStat
          productsTotalPrice={productsTotalPrice}
          productsAverageRating={productsAverageRating}
        />
        <FavouritesList
          favouritesProducts={favouritesProducts}
          onRemoveFromFavourites={removeFromFavourites}
        />
      </div>
    </MainWrapper>
  );
};

export default App;
