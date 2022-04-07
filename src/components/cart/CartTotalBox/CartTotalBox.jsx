import React from "react";

import "./CartTotalBox.css";

const CartTotalBox = () => {
  return (
    <div class="total-box">
      <div class="cart-total-box">
        <p class="p-large text-left text-bold-weight">Price Details</p>
        <hr />
        <div class="side-ways-cart">
          <p class="p-large text-left">Price (2 items)</p>
          <p class="p-large text-left">Rs. 1198</p>
        </div>
        <div class="side-ways-cart">
          <p class="p-large text-left">Discount</p>
          <p class="p-large text-left">- Rs. 120</p>
        </div>
        <div class="side-ways-cart">
          <p class="p-large text-left">Delivery charges</p>
          <p class="p-large text-left">Rs. 0</p>
        </div>
        <hr />
        <div class="side-ways-cart">
          <p class="p-large text-left text-bold-weight">TOTAL AMOUNT</p>
          <p class="p-large text-left text-bold-weight">Rs. 1078</p>
        </div>
        <hr />
        <p class="p-large text-left save-rs">
          You will save Rs. 120 on this order!
        </p>
        <div class="side-ways-cart">
          <button class="btn-solid-primary">Place order</button>
        </div>
      </div>
    </div>
  );
};

export default CartTotalBox;
