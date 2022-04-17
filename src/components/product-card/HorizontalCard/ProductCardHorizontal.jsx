import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ProductCardHorizontal.css";
import { useData } from "../../../context/DataContext/DataContext";

const ProductCardHorizontal = ({ item }) => {
  const { data, dispatch } = useData();

  const [loginError, setLoginError] = useState(false);

  const inWishList = data.wishlist.some((e) => e.id === item.id);

  const loginToken = localStorage.getItem("login");

  async function addProductToWishlist(product) {
    if ("login" in localStorage) {
      setLoginError(false);
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
    } else {
      setLoginError(true);
    }
  }

  async function removeFromWishlist(product) {
    if ("login" in localStorage) {
      setLoginError(false);
      try {
        const responseWishlist = await axios.get(`/api/user/wishlist`, {
          headers: {
            authorization: loginToken,
          },
        });
        if (
          responseWishlist.data.wishlist.find(
            (item) => item._id === product._id
          )
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
    } else {
      setLoginError(true);
    }
  }

  async function addProductToCart(product) {
    if ("login" in localStorage) {
      setLoginError(false);
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
    } else {
      setLoginError(true);
    }
  }

  async function removeFromCart(product) {
    if ("login" in localStorage) {
      setLoginError(false);
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
    } else {
      setLoginError(true);
    }
  }

  const callLoginErrorFunc = () => {
    return (
      <div className="toast-box toast-error">
        <p>Please login first!</p>
        <button className="no-bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => setLoginError(false), 5000);
  }, [loginError]);

  return (
    <>
      {loginError ? callLoginErrorFunc() : null}
      <div className="card-container-horizontal">
        <div className="content-card">
          <div className="image-container">
            <div className="badge-container">
              <div>
                <img
                  className="responsive-img product-img"
                  src={item.imagePath}
                  alt="Product"
                />
                <span className="img-badge">{item.trendingText}</span>
              </div>
            </div>
          </div>
          <div className="details-container">
            <p className="product-heading">{item.productName}</p>
            <p className="product-short-description">
              {item.productShortDescription}
            </p>
            <p className="product-soldby">{item.soldBy}</p>
            <p className="price">
              Rs. {item.salePrice}
              <span className="cut-price">Rs. {item.originalPrice}</span>
              <span className="discount">{item.discountPercent}%</span>
            </p>
            <div className="btn-box">
              <div className="quantity-box">
                <button
                  onClick={() => addProductToCart(item)}
                  className="btn-solid-floating"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                  </svg>
                </button>
                <p className="p-medium">{item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item)}
                  className="btn-solid-floating"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
                  </svg>
                </button>
              </div>
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
                  Move to Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
        {item.closeActive ? (
          <div className="close-badge-container">
            <span className="close-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ProductCardHorizontal;
