import React from "react";
import ProductCardVertical from "../product-card/VerticalCard/ProductCardVertical";

import "./ListingPage.css";

const ListingPage = ({ item }) => {
  return (
    <main class="products-content">
      <p class="text-regular-weight text-left">Products</p>
      <p>(Showing all products)</p>
      <div class="card-container-horizontal">
        <div class="image-container">
          <div class="badge-container">
            <img
              class="responsive-img product-img"
              src="../assets/product.jpg"
            />
            <span class="img-badge">Trend</span>
          </div>
        </div>
        <div class="details-container">
          <p class="product-heading">Blue T-Shirt</p>
          <p class="product-short-description">
            Lorem Ipsum has been the dummy text
          </p>
          <p class="product-soldby">Sold by: Amazon</p>
          <p class="product-description">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC
          </p>
          <button class="no-bg btn-icon-text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            Add to Cart
          </button>
          <button class="no-bg btn-icon-text-outline">Wishlist</button>
        </div>
      </div>

      <div className="products">
        <ProductCardVertical
          item={{
            trendingText: "New",
            productName: "Blue T-Shirt",
            productDescription: "Lorem Ipsum has been the dummy text",
            salePrice: 899,
            originalPrice: 999,
            discountPercent: 10,
            closeActive: false
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
            closeActive: false
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
            closeActive: false
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
            closeActive: false
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
            closeActive: false
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
            closeActive: false
          }}
        />
      </div>
    </main>
  );
};

export default ListingPage;
