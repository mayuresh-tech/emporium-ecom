import React from "react";

import "./Homepage.css";

import { Navbar } from "../components/navbar/Navbar";
import CategoriesGrid from "../components/categories/CategoriesGrid/CategoriesGrid";
import Collection from "../components/collections/Collection/Collection";
import Offers from "../components/offers/Offers";

function HomePage() {
  return (
    <div>
      <Navbar />
      <CategoriesGrid />
      <Collection />
      <Offers />
    </div>
  );
}

export default HomePage;
