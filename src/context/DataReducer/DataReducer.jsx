export const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOAD__PRODUCTS":
      return { ...state, products: action.payload };
    case "CLEAR":
      return {};
    default:
      return null;
  }
};
