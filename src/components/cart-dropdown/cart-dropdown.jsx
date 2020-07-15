import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart-action";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItem, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.length ? (
          cartItem.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        Go TO Checkout{" "}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
