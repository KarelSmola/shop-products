import { useState, useEffect } from "react";

const url = "https://dummyjson.com/products";

export const useFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    };

    fetchData();
  }, []);

  return [products, setProducts];
};
