import React from "react";
import ProductCardVertical from "../components/product-card/VerticalCard/ProductCardVertical";
import { useData } from "../context/DataContext/DataContext";

import "./Wishlist.css";

const Wishlist = () => {
  const { data } = useData();
  return (
    <>
      <p class="p-large text-center top-description">My Wishlist</p>
      <div class="wishlist-box">
        {data.wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <p>No products wishlisted!</p>
            <img src="./assets/empty_wishlist.svg"></img>
          </div>
        ) : (
          data.wishlist.map((item) => {
            return (
              <ProductCardVertical
                key={item._id}
                item={{
                  productName: item.productName,
                  productShortDescription: item.productShortDescription,
                  productLongDescription: item.productLongDescription,
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
                }}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Wishlist;
