import React from "react";
import ProductCardHorizontal from "../product-card/HorizontalCard/ProductCardHorizontal";
import CartTotalBox from "./CartTotalBox/CartTotalBox";

import "./CartCardAndTotalBox.css";

const CartCardAndTotalBox = () => {
  return (
    <>
      <p class="p-large text-center top-description">My Cart</p>
      <div class="main-cart-box">
        <div>
          <ProductCardHorizontal
            item={{
              productName: "Blue T-Shirt",
              productShortDescription: "Lorem Ipsum has been the dummy text",
              productLongDescription: "",
              trendingText: "New",
              categoryName: "men",
              soldBy: "Amazon",
              rating: 4.4,
              salePrice: 899,
              originalPrice: 999,
              discountPercent: 10,
              closeActive: true,
              isWishlisted: true,
              imagePath: "/assets/product.jpg",
              quantity: 1,
            }}
          />
          <ProductCardHorizontal
            item={{
              productName: "Blue T-Shirt",
              productShortDescription: "Lorem Ipsum has been the dummy text",
              productLongDescription: "",
              trendingText: "New",
              categoryName: "men",
              soldBy: "Amazon",
              rating: 4.4,
              salePrice: 899,
              originalPrice: 999,
              discountPercent: 10,
              closeActive: true,
              isWishlisted: false,
              imagePath: "/assets/product.jpg",
              quantity: 1,
            }}
          />
        </div>
        <CartTotalBox
          item={{
            quantity: 2,
            cartPrice: 1198,
            discount: 120,
            delivery: 0,
            finalAmount: 1078,
          }}
        />
      </div>
    </>
  );
};

export default CartCardAndTotalBox;
