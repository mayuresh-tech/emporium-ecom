export const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };
    case "LOAD_CATEGORY":
      return { ...state, categories: action.payload };
    case "LOAD_WISHLIST":
      localStorage.setItem("wishlist", JSON.stringify(action.payload));
      return { ...state, wishlist: action.payload };
    case "LOAD_CART":
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return { ...state, cart: action.payload };
    case "CLEAR":
      return {};
    case "LOGOUT":
      return { ...state, wishlist: [], cart: [] };
    default:
      return state;
  }
};
