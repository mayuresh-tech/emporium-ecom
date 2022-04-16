import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../DataReducer/DataReducer";

import { getProducts, getCategories } from "../../services/services.js";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  /* eslint-disable no-unused-vars */
  const token = localStorage.getItem("login");

  const [data, dispatch] = useReducer(DataReducer, {
    /* eslint-enable no-unused-vars */
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
