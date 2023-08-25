import React from "react";

import classes from "./Sort.module.css";

const Sort = ({ onSortBy, sort }) => {
  return (
    <div className={classes.sort}>
      <select
        className={classes["select-sort"]}
        onChange={(e) => {
          onSortBy(e.target.value);
        }}
        value={sort}
      >
        <option value="title">Default sort</option>
        <option value="price">Sort by price</option>
        <option value="rating">Sort by rating</option>
      </select>
    </div>
  );
};

export default Sort;
