import React from "react";
import { useData } from "../../../context/DataContext/DataContext";
import axios from "axios";
import "./TrendingCard.css";

import { Link } from "react-router-dom";


const TrendingCard = ({ item }) => {
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

  return (
    <div className="card-container-horizontal-listing">
      <div className="image-container">
        <div className="badge-container">
          <img
            className="responsive-img product-img"
            src={item.imagePath}
            alt="Product"
          />
          <span className="img-badge">{item.trendingText}</span>
        </div>
      </div>
      <div className="details-container">
        <p className="product-heading">{item.productName}</p>
        <p className="product-short-description">
          {item.productShortDescription}
        </p>
        <p className="product-soldby">Sold by: {item.soldBy}</p>
        <p className="product-description">{item.productLongDescription}</p>
        {inCart ? (
          <Link to="/cart">
          <button className="no-bg btn-icon-text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            Go to Cart
          </button>
        </Link>
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
        {inWishList ? (
          <button
            onClick={() => removeFromWishlist(item)}
            className="no-bg btn-icon-text-outline"
          >
            Remove from Wishlist
          </button>
        ) : (
          <button
            onClick={() => addProductToWishlist(item)}
            className="no-bg btn-icon-text-outline"
          >
            Add to Wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendingCard;
