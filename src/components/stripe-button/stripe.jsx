import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe.scss";

const stripeCheckoutButton = ({ price }) => {
  const priceStripe = price * 100;
  const publishableKey =
    "pk_test_51H72zoAzFhH07xpI2pkF5Fw2iEea00IgTgkyTjGBN4oWqg5UjBdXd2RBrCYBWeZ1Rsa2mugubS8xdUejO217MXQd00NhNtcuI6";
  const onToken = (token) => {
    console.log(token);
    alert("payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Pvt. Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default stripeCheckoutButton;
