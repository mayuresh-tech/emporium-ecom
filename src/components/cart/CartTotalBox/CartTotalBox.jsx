import React from "react";

import "./CartTotalBox.css";

const CartTotalBox = ({item}) => {
  return (
    <div className="total-box">
      <div className="cart-total-box">
        <p className="p-large text-left text-bold-weight">Price Details</p>
        <hr />
        <div className="side-ways-cart">
          <p className="p-large text-left">Price ({item.quantity} items)</p>
          <p className="p-large text-left">Rs. {item.cartPrice}</p>
        </div>
        <div className="side-ways-cart">
          <p className="p-large text-left">Discount</p>
          <p className="p-large text-left">- Rs. {item.discount}</p>
        </div>
        <div className="side-ways-cart">
          <p className="p-large text-left">Delivery charges</p>
          <p className="p-large text-left">Rs. {item.delivery}</p>
        </div>
        <hr />
        <div className="side-ways-cart">
          <p className="p-large text-left text-bold-weight">TOTAL AMOUNT</p>
          <p className="p-large text-left text-bold-weight">Rs. {item.finalAmount}</p>
        </div>
        <hr />
        <p className="p-large text-left save-rs">
          You will save Rs. {item.discount} on this order!
        </p>
        <div className="side-ways-cart">
          <button className="btn-solid-primary">Place order</button>
        </div>
      </div>
    </div>
  );
};

export default CartTotalBox;
