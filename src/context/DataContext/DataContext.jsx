import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../DataReducer/DataReducer";

import axios from "axios";

import { getProducts, getCategories } from "../../services/services.js";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(DataReducer, {
    products: [],
    cart: [],
    wishlist: [],
    categories: [],
    price: 5000,
    rating: 0,
    sortBy: null,
    men: false,
    women: false,
    electronics: false,
    decor: false,
  });

  useEffect(() => {
    (async () => {
      const loginToken = localStorage.getItem("login");

      const loadCartUserData = async () => {
        if ("login" in localStorage) {
          const cartResponse = await axios.get(`/api/user/cart`, {
            headers: {
              authorization: loginToken,
            },
          });
          dispatch({
            type: "LOAD_CART",
            payload: cartResponse.data.cart,
          });
        } else {
          // do nothing
        }
      };

      const loadWishlistUserData = async () => {
        if ("login" in localStorage) {
          const wishlistResponse = await axios.get(`/api/user/wishlist`, {
            headers: {
              authorization: loginToken,
            },
          });
          dispatch({
            type: "LOAD_WISHLIST",
            payload: wishlistResponse.data.wishlist,
          });
        } else {
          // do nothing
        }
      };

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
    })();
  }, []);

  const priceFilter =
    data.price === 500
      ? data.products
      : data.products.filter((item) => {
          return parseInt(item.salePrice) <= parseInt(data.price);
        });

  const category = data.men || data.women || data.electronics || data.decor;

  const menFilter = priceFilter.filter((item) =>
    item.categoryName === "men" && data.men ? true : false
  );

  const womenFilter = priceFilter.filter((item) =>
    item.categoryName === "women" && data.women ? true : false
  );

  const electronicsFilter = priceFilter.filter((item) =>
    item.categoryName === "electronics" && data.electronics ? true : false
  );

  const decorFilter = priceFilter.filter((item) =>
    item.categoryName === "decor" && data.decor ? true : false
  );

  const categoryFilter = category
    ? [...menFilter, ...womenFilter, ...electronicsFilter, ...decorFilter]
    : priceFilter;

  const ratingFilter =
    data.rating === 0
      ? categoryFilter
      : categoryFilter.filter((item) => item.rating > data.rating);

  function getSorted(product, sortBy) {
    const output =
      sortBy === null
        ? product
        : product.sort((a, b) => {
            if (sortBy === "LOW_TO_HIGH")
              return parseInt(a.salePrice) - parseInt(b.salePrice);
            else if (sortBy === "HIGH_TO_LOW")
              return parseInt(b.salePrice) - parseInt(a.salePrice);
            else return parseFloat(b.rating) - parseFloat(a.rating);
          });
    return output;
  }

  const filtered = getSorted(ratingFilter, data.sortBy);

  return (
    <DataContext.Provider value={{ data, dispatch, filtered }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
