import React from "react";
import { Navbar } from "../components/navbar/Navbar";

import ProductCardVertical from "../components/product-card/VerticalCard/ProductCardVertical";


import "./Wishlist.css";

const Wishlist = () => {
    return (
        <>
            <Navbar/>
            <p class="p-large text-center">My Wishlist</p>
            <div class="wishlist-box">
            <ProductCardVertical
          item={{
            trendingText: "New",
            productName: "Blue T-Shirt",
            productDescription: "Lorem Ipsum has been the dummy text",
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
          }}
        />
        <ProductCardVertical
          item={{
            trendingText: "New",
            productName: "Blue T-Shirt",
            productDescription: "Lorem Ipsum has been the dummy text",
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
          }}
        />
        <ProductCardVertical
          item={{
            trendingText: "New",
            productName: "Blue T-Shirt",
            productDescription: "Lorem Ipsum has been the dummy text",
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
          }}
        />
        <ProductCardVertical
          item={{
            trendingText: "New",
            productName: "Blue T-Shirt",
            productDescription: "Lorem Ipsum has been the dummy text",
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
          }}
        />
            </div>
        </>
    );
};

export default Wishlist;