import React from "react";

import "./CollectionBox.css";

const CollectionBox = ({item}) => {
    return (
        <div className="collec-box">
            <div className="collec-image">
                <img className="responsive-img" src={item.imagePath} alt="Collection" />
            </div>
            <div className="flex-right">
                <div className="new-arrival-text">
                    {item.trendingText}
                </div>
                <div className="collec-name">
                    {item.collectionName}
                </div>
                <div className="collec-description">
                    {item.collectionDescription}
                </div>
            </div>
        </div>
    );
};

export default CollectionBox;