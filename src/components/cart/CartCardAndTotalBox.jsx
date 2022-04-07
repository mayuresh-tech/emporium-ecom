import React from "react";
import ProductCardHorizontal from "../product-card/HorizontalCard/ProductCardHorizontal";
import CartTotalBox from "./CartTotalBox/CartTotalBox";

import "./CartCardAndTotalBox.css";

const CartCardAndTotalBox = () => {
  return (
    <>
      <p class="p-large text-center">My Cart</p>
      <div class="main-cart-box">
        <div>
          <ProductCardHorizontal
            item={{
              trendingText: "New",
              productName: "Blue T-Shirt",
              productShortDescription: "Lorem Ipsum has been the dummy text",
              soldBy: "Amazon",
              quantity: 1,
              salePrice: 899,
              originalPrice: 999,
              discountPercent: 10,
              closeActive: true
            }}
          />
          <ProductCardHorizontal
            item={{
              trendingText: "New",
              productName: "Blue T-Shirt",
              productShortDescription: "Lorem Ipsum has been the dummy text",
              soldBy: "Amazon",
              quantity: 1,
              salePrice: 899,
              originalPrice: 999,
              discountPercent: 10,
              closeActive: true
            }}
          />
        </div>
        <CartTotalBox item={{ quantity: 2, cartPrice: 1198, discount: 120, delivery: 0, finalAmount: 1078 }}/>
      </div>
    </>
  );
};

export default CartCardAndTotalBox;
