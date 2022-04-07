import React from "react";

import "./CategoriesCard.css";

const CategoriesCard = ({item}) => {
    return (
        <div className="cat-images">
            <img className="responsive-img" src={item.imgPath} alt={item.categoryName} />
            <p>{item.categoryName}</p>
        </div>
    );
}

export default CategoriesCard;