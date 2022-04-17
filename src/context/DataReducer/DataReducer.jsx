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
    case "LOGOUT":
      return { ...state, wishlist: [], cart: [] };
    case "MEN":
      return { ...state, men: !state.men };
    case "WOMEN":
      return { ...state, women: !state.women };
    case "ELECTRONICS":
      return { ...state, electronics: !state.electronics };
    case "DECOR":
      return { ...state, decor: !state.decor };
    case "RATING":
      return { ...state, rating: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "CLEAR":
      return {
        ...state,
        price: 500,
        rating: 0,
        sortBy: null,
        men: false,
        women: false,
        electronics: false,
        decor: false,
      };
    default:
      return state;
  }
};
