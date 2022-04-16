import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../DataReducer/DataReducer";

import { useAuth } from "../AuthContext/AuthContext";

import axios from "axios";

import {
  getProducts,
  getCategories,
  getCartlist,
  getWishlist,
} from "../../services/services.js";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { token } = useAuth();

  const loginToken = localStorage.getItem("login");

  const loadCartUserData = async () => {
    const cartResponse = await axios.get(`/api/user/cart`, {
      headers: {
        authorization: loginToken,
      },
    });
    dispatch({
      type: "LOAD_CART",
      payload: cartResponse.data.cart,
    });
  };

  const loadWishlistUserData = async () => {
    const wishlistResponse = await axios.get(`/api/user/wishlist`, {
      headers: {
        authorization: loginToken,
      },
    });
    dispatch({
      type: "LOAD_WISHLIST",
      payload: wishlistResponse.data.wishlist,
    });
  };

  const [data, dispatch] = useReducer(DataReducer, {
    products: [],
    cart: [],
    wishlist: [],
    categories: [],
    price: 500,
    rating: 0,
    sortBy: null,
    men: false,
    women: false,
    electronics: false,
    decor: false,
  });

  useEffect(() => {
    async function performSteps() {
      try {
        const productResponse = await getProducts();
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: productResponse.data.products,
        });
        const categoryResponse = await getCategories();
        dispatch({
          type: "LOAD_CATEGORY",
          payload: categoryResponse.data.categories,
        });
        "cart" in localStorage
          ? dispatch({
              type: "LOAD_CART",
              payload: JSON.parse(localStorage.getItem("cart")),
            })
          : loadCartUserData();
        "wishlist" in localStorage
          ? dispatch({
              type: "LOAD_WISHLIST",
              payload: JSON.parse(localStorage.getItem("wishlist")),
            })
          : loadWishlistUserData();
      } catch (e) {
        console.log("load", e);
      }
    }
    performSteps();
  }, []);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
