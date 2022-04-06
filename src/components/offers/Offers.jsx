import React from "react";
import Heading from "../heading/Heading";
import OfferBox from "./OffersBox/OffersBox";

import "./Offers.css";

const Offers = () => {
  return (
    <>
      <Heading item={{ headingName: "Offers" }} />
      <div className="mainBox">
        <OfferBox item={{ offer: "Buy 2 get 40% Off", knowMoreText: "Know more" }} />
        <OfferBox item={{ offer: "Buy 3 get 50% Off", knowMoreText: "Know more" }} />
        <OfferBox item={{ offer: "Buy 4+ get 70% Off", knowMoreText: "Know more" }} />
    </div>
    </>
  );
};

export default Offers;
