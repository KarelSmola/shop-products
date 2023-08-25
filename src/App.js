import React from "react";
import Sort from "./components/Sort";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import FavouritesList from "./components/FavouritesList";
import { useSort } from "./hooks/useSort";
import { useFetch } from "./hooks/useFetch";
import { useFavourites } from "./hooks/useFavourites";
import { useDetail } from "./hooks/useDetail";

import MainWrapper from "./components/UI/MainWrapper";
import FavouriteProductsStat from "./components/FavouriteProductsStat";

const App = () => {
  const [products] = useFetch();
  const [sortProducts, sortedProducts, sortBy] = useSort({ products });
  const [toggleShowDetail, closeDetail, showDetail, setShowDetail] =
    useDetail();

  const [favouritesProducts, addToFavourites, removeFromFavourites] =
    useFavourites({ setShowDetail });

  const { id, title, image, brand, price, rating, description } = showDetail;

  const productsTotalPrice = favouritesProducts.length
    ? favouritesProducts.reduce((acc, cur) => acc + cur.price, 0)
    : "0";

  const productsAverageRating = favouritesProducts.length
    ? Number(
        favouritesProducts.reduce((acc, cur) => acc + cur.rating, 0) /
          favouritesProducts.length
      ).toFixed(2)
    : "0";

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
