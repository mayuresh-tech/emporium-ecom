import React from "react";

import "./Homepage.css";

import CategoriesGrid from "../components/categories/CategoriesGrid/CategoriesGrid";
import Collection from "../components/collections/Collection/Collection";
import Offers from "../components/offers/Offers";

function HomePage() {
  return (
    <div>
      <CategoriesGrid />
      <Collection />
      <Offers />
    </div>
  );
}

export default HomePage;
