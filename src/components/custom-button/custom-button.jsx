import React from "react";
import "./custom-button.scss";

const CustomInput = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomInput;
