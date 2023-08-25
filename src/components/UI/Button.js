import React from "react";

import classes from "./Button.module.css";

const Button = ({ className, children, onClick }) => {
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
