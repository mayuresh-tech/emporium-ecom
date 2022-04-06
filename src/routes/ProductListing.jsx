import React from "react";
import ListingPage from "../components/listing/ListingPage";
import FilterSideBar from "../components/listing/FilterBar/FilterSideBar";

import "./ProductListing.css";
import { Navbar } from "../components/navbar/Navbar";

const ProductListing = () => {
  return (
    <>
      <Navbar />
      <FilterSideBar />
      <ListingPage />
    </>
  );
};

export default ProductListing;
