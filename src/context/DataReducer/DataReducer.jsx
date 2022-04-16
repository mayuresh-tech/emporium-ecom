export const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };
    case "LOAD_CATEGORY":
      return { ...state, categories: action.payload };
    case "CLEAR":
      return {};
    default:
      return state;
  }
};
