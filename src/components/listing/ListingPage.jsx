import React from "react";
import { useData } from "../../context/DataContext/DataContext";
import TrendingCard from "../product-card/TrendingCard/TrendingCard";
import ProductCardVertical from "../product-card/VerticalCard/ProductCardVertical";

import "./ListingPage.css";

const ListingPage = () => {
  const { data } = useData();

  let trendingArr = [];
  let productsArr = [];

  data.products.forEach((item) => {
    item.trendingText === "Trend"
      ? trendingArr.push(item)
      : productsArr.push(item);
  });

  return (
    <main class="products-content">
      <p class="text-regular-weight text-left">Products</p>
      <p>(Showing all products)</p>
      {trendingArr.map((item) => {
        return (
          <TrendingCard
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
      })}

      <div className="products">
        {productsArr.map((item) => {
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
        })}
      </div>
    </main>
  );
};

export default ListingPage;
