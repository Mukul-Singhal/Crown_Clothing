import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> Go TO Checkout </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});
export default connect(mapStateToProps)(CartDropDown);
