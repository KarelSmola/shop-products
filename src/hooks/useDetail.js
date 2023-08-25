import { useState } from "react";

export const useDetail = () => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleShowDetail = (product) => {
    product?.id === showDetail?.id && closeDetail();

    product?.id !== showDetail?.id &&
      setShowDetail({
        id: product.id,
        title: product.title,
        image: product.images[0],
        brand: product.brand,
        price: product.price,
        rating: product.rating,
        description: product.description,
      });
  };

  // const { id, title, image, brand, price, rating, description } = showDetail;

  const closeDetail = () => {
    setShowDetail(false);
  };

  return [toggleShowDetail, closeDetail, showDetail, setShowDetail];
};
