import React from "react";

import "./CartTotalBox.css";

const CartTotalBox = ({item}) => {
  return (
    <div class="total-box">
      <div class="cart-total-box">
        <p class="p-large text-left text-bold-weight">Price Details</p>
        <hr />
        <div class="side-ways-cart">
          <p class="p-large text-left">Price ({item.quantity} items)</p>
          <p class="p-large text-left">Rs. {item.cartPrice}</p>
        </div>
        <div class="side-ways-cart">
          <p class="p-large text-left">Discount</p>
          <p class="p-large text-left">- Rs. {item.discount}</p>
        </div>
        <div class="side-ways-cart">
          <p class="p-large text-left">Delivery charges</p>
          <p class="p-large text-left">Rs. {item.delivery}</p>
        </div>
        <hr />
        <div class="side-ways-cart">
          <p class="p-large text-left text-bold-weight">TOTAL AMOUNT</p>
          <p class="p-large text-left text-bold-weight">Rs. {item.finalAmount}</p>
        </div>
        <hr />
        <p class="p-large text-left save-rs">
          You will save Rs. {item.discount} on this order!
        </p>
        <div class="side-ways-cart">
          <button class="btn-solid-primary">Place order</button>
        </div>
      </div>
    </div>
  );
};

export default CartTotalBox;
