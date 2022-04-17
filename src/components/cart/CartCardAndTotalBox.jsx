import React from "react";
import ProductCardHorizontal from "../product-card/HorizontalCard/ProductCardHorizontal";
import CartTotalBox from "./CartTotalBox/CartTotalBox";

import "./CartCardAndTotalBox.css";
import { useData } from "../../context/DataContext/DataContext";

const CartCardAndTotalBox = () => {
  const { data } = useData();

  let cartPrice = 0;
  let discount = 0;
  let finalAmount = 0;

  data.cart.forEach((item) => {
    cartPrice = cartPrice + item.originalPrice;
    discount = discount + (item.originalPrice / 100) * item.discountPercent;
  });

  finalAmount = cartPrice - discount;

  return (
    <>
      <p className="p-large text-center top-description">My Cart</p>
      {data.cart.length === 0 ? (
        <div className="empty-cart">
          <p>No products in Cart!</p>
          <img src="./assets/empty_cart.svg" alt="Empty Cart"></img>
        </div>
      ) : (
        <div className="main-cart-box">
          <div>
            {data.cart.map((item) => {
              return (
                <ProductCardHorizontal
                  key={item.id}
                  item={{
                    id: item.id,
                    productName: item.productName,
                    productShortDescription: item.productShortDescription,
                    productLongDescription: "",
                    trendingText: item.trendingText,
                    categoryName: item.categoryName,
                    soldBy: item.soldBy,
                    rating: item.rating,
                    salePrice: item.salePrice,
                    originalPrice: item.originalPrice,
                    discountPercent: item.discountPercent,
                    closeActive: item.closeActive,
                    wishlisted: item.wishlisted,
                    imagePath: item.imagePath,
                    quantity: 1,
                  }}
                />
              );
            })}
          </div>
          <CartTotalBox
            item={{
              quantity: data.cart.length,
              cartPrice: cartPrice,
              discount: discount.toFixed(0),
              delivery: 0,
              finalAmount: finalAmount.toFixed(0),
            }}
          />
        </div>
      )}
    </>
  );
};

export default CartCardAndTotalBox;
