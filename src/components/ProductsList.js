import React from "react";
import Product from "./Product";

import classes from "./ProductsList.module.css";

const ProductsList = ({ products, onToggleShowDetail, selectedProduct }) => {
  return (
    <ul className={classes["products-list"]}>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          id={product.id}
          title={product.title}
          img={product.thumbnail}
          rating={product.rating}
          price={product.price}
          description={product.description}
          onToggleShowDetail={onToggleShowDetail}
          selectedProduct={selectedProduct}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
