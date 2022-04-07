import React from "react";

import "./OffersBox.css";

const OfferBox = ({ item }) => {
  return (
    <div className="flexibleBox hover-box">
      <div className="content">
        <p>{item.offer}</p>
        <button className="knowmore">{item.knowMoreText}</button>
      </div>
    </div>
  );
};

export default OfferBox;
