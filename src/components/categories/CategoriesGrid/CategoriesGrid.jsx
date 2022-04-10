import React from "react";

import "./CategoriesGrid.css";

import CategoriesCard from "../CategoriesCard/CategoriesCard";

const CategoriesGrid = () => {
  return (
    <div className="grid-cat-images">
        <CategoriesCard
          item={{ imgPath: "./assets/men.jpg", categoryName: "Men" }}
        />
        <CategoriesCard
          item={{ imgPath: "./assets/women.jpg", categoryName: "Women" }}
        />
        <CategoriesCard
          item={{
            imgPath: "./assets/electronics.jpg",
            categoryName: "Electronics",
          }}
        />
        <CategoriesCard
          item={{ imgPath: "./assets/decor.jpg", categoryName: "Decor" }}
        />
    </div>
  );
};

export default CategoriesGrid;
