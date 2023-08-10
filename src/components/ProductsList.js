import React from "react";
import Product from "./Product";

import classes from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
  return (
    <ul className={classes["products-list"]}>
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          img={product.image}
          rating={product.rating.rate}
          price={product.price}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
