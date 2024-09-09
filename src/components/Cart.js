import React from "react";
import bagImg from "../bag.png";
import trollyImg from "../cart_bag.png";

const Cart = () => {
  return (
    <div style={{display: 'flex', gap: '8px'}}>
      <div
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "32px",
        }}
      >
        Cart
      </div>
      <div
        style={{
          width: "58px",
          paddingRight: '12px',
          margin: "auto",
        }}
      >
        <img style={{ width: "100%" }} src={trollyImg} alt="Cart" />
      </div>
    </div>
  );
};

export default Cart;
