import React from "react";

import "./ProductCardHorizontal.css";

const ProductCardHorizontal = ({ item }) => {
  return (
    <div class="card-container-horizontal">
      <div className="content-card">
        <div class="image-container">
          <div class="badge-container">
            <div>
              <img
                class="responsive-img product-img"
                src={item.imagePath}
                alt="Product"
              />
              <span class="img-badge">{item.trendingText}</span>
            </div>
          </div>
        </div>
        <div class="details-container">
          <p class="product-heading">{item.productName}</p>
          <p class="product-short-description">
            {item.productShortDescription}
          </p>
          <p class="product-soldby">{item.soldBy}</p>
          <p class="price">
            Rs. {item.salePrice}
            <span class="cut-price">Rs. {item.originalPrice}</span>
            <span class="discount">{item.discountPercent}%</span>
          </p>
          <div class="btn-box">
            <div class="quantity-box">
              <button class="btn-solid-floating">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                </svg>
              </button>
              <p class="p-medium">{item.quantity}</p>
              <button class="btn-solid-floating">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
                </svg>
              </button>
            </div>
            {item.isWishlisted ? null : (
              <button class="no-bg btn-icon-text-outline">
                Move to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
      {item.closeActive ? (
        <div className="close-badge-container">
          <span class="close-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductCardHorizontal;
