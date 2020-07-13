import React from "react";

import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton> Go TO Checkout </CustomButton>
  </div>
);

export default CartDropDown;
