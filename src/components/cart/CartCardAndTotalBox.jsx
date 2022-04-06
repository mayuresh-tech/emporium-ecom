import React from "react";
import ProductCardHorizontal from "../product-card/HorizontalCard/ProductCardHorizontal";
import CartTotalBox from "./CartTotalBox/CartTotalBox";

import "./CartCardAndTotalBox.css";

const CartCardAndTotalBox = () => {
  return (
    <>
      <p class="p-large text-center">My Cart (2)</p>
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
            }}
          />
        </div>
        <CartTotalBox />
      </div>
    </>
  );
};

export default CartCardAndTotalBox;
