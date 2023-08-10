import React, { useState } from "react";
import Product from "./Product";

import classes from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <ul className={classes["products-list"]}>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          img={product.image}
          rating={product.rating.rate}
          price={product.price}
          description={product.description}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
