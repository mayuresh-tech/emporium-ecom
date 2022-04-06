import React from "react";
import { Link } from "react-router-dom";

import "./CategoriesCard.css";

const CategoriesCard = ({ item }) => {
  return (
    <div className="cat-images">
      <Link to="products">
        <img
          className="responsive-img"
          src={item.imgPath}
          alt={item.categoryName}
        />
      </Link>
      <p>{item.categoryName}</p>
    </div>
  );
};

export default CategoriesCard;
