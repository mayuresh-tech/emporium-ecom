import React from "react";
import { useData } from "../../../context/DataContext/DataContext";
import axios from "axios";

import "./ProductCardVertical.css";

const ProductCardVertical = ({ item }) => {
  const { data, dispatch } = useData();

  const inWishList = data.wishlist.some((e) => e.id === item.id);

  const inCart = data.cart.some((e) => e.id === item.id);

  const loginToken = localStorage.getItem("login");

  async function addProductToWishlist(product) {
    try {
      const responseWishlist = await axios.get(`/api/user/wishlist`, {
        headers: {
          authorization: loginToken,
        },
      });
      if (
        !responseWishlist.data.wishlist.find((item) => item.id === product.id)
      ) {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product,
          },
          {
            headers: {
              authorization: loginToken,
            },
          }
        );
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: "LOAD_WISHLIST",
            payload: response.data.wishlist,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function addProductToCart(product) {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: {
            authorization: loginToken,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "LOAD_CART",
          payload: response.data.cart,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function removeFromWishlist(product) {
    try {
      const responseWishlist = await axios.get(`/api/user/wishlist`, {
        headers: {
          authorization: loginToken,
        },
      });
      if (
        responseWishlist.data.wishlist.find((item) => item._id === product._id)
      ) {
        const response = await axios.delete(
          `/api/user/wishlist/${product.id}`,
          {
            headers: {
              authorization: loginToken,
            },
          }
        );
        if (response.status === 200 || response.status === 201) {
          const serverResponse = await axios.get(`/api/user/wishlist`, {
            headers: {
              authorization: loginToken,
            },
          });
          dispatch({
            type: "LOAD_WISHLIST",
            payload: serverResponse.data.wishlist,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function removeFromCart(product) {
    try {
      const responseCart = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: loginToken,
        },
      });
      if (responseCart.data.cart.find((item) => item._id === product._id)) {
        const response = await axios.delete(`/api/user/cart/${product.id}`, {
          headers: {
            authorization: loginToken,
          },
        });
        if (response.status === 200 || response.status === 201) {
          const serverResponse = await axios.get(`/api/user/cart`, {
            headers: {
              authorization: loginToken,
            },
          });
          dispatch({
            type: "LOAD_CART",
            payload: serverResponse.data.cart,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="card-container-vertical">
      <div className="image-container">
        <div className="badge-container-vertical">
          <img
            className="product-img-vertical"
            src={item.imagePath}
            alt="Product"
          />
          {item.trendingText === "" ? null : (
            <span className="img-badge">{item.trendingText}</span>
          )}
          {item.closeActive ? (
            <span className="close-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="details-container">
        <div className="top-details">
          <p className="product-heading">{item.productName}</p>
          {inWishList ? (
            <button
              onClick={() => removeFromWishlist(item)}
              className="no-bg btn-icon"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => addProductToWishlist(item)}
              className="no-bg btn-icon no-wishlist"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
              </svg>
            </button>
          )}
        </div>
        <p className="product-short-description">
          {item.productShortDescription}
        </p>
        <p className="price">
          Rs. {item.salePrice}
          <span className="cut-price">Rs. {item.originalPrice}</span>
          <span className="discount">{item.discountPercent}%</span>
        </p>
        {inCart ? (
          <button
            onClick={() => removeFromCart(item)}
            className="no-bg btn-icon-text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => addProductToCart(item)}
            className="no-bg btn-icon-text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCardVertical;
