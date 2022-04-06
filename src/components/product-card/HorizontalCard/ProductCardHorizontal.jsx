import React from "react";

import "./ProductCardHorizontal.css";

const ProductCardHorizontal = ({item}) => {
  return (
    <div class="card-container-horizontal">
      <div class="image-container">
        <div class="badge-container">
          <img class="responsive-img product-img" src="/assets/product.jpg" />
          <span class="img-badge">{item.trendingText}</span>
        </div>
      </div>
      <div class="details-container">
        <p class="product-heading">{item.productName}</p>
        <p class="product-short-description">
        {item.productDescription}
        </p>
        <p class="product-soldby">{item.soldBy}</p>
        <p class="product-description">
          <p class="price">
            Rs. {item.salePrice} <span class="cut-price">Rs. {item.originalPrice}</span>{" "}
            <span class="discount">{item.discountPercent}%</span>
          </p>
        </p>
        <div class="btn-box">
          <div class="quantity-box">
            <button class="btn-solid-floating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
              </svg>
            </button>
            <p class="p-medium">1</p>
            <button class="btn-solid-floating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
              </svg>
            </button>
          </div>
          <button class="no-bg btn-icon-text-outline">Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardHorizontal;
