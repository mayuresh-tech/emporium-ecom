import React from "react";
import ListingPage from "../components/listing/ListingPage";
import FilterSideBar from "../components/listing/FilterBar/FilterSideBar";

import "./ProductListing.css";

const ProductListing = () => {
  return (
    <>
      <FilterSideBar />
      <ListingPage />
    </>
  );
};

export default ProductListing;
