import React from "react";
import Heading from "../../heading/Heading";
import CollectionBox from "../CollectionBox/CollectionBox";

import "./Collection.css";

const Collection = () => {
  return (
    <>
      <Heading item={{ headingName: "Collections" }} />
      <div className="collections">
        <CollectionBox
          item={{
            imagePath: "./assets/men.jpg",
            trendingText: "New Arrivals",
            collectionName: "Summer Collection",
            collectionDescription:
              "Checkout out best Summer Collection to stay cool and style out!",
          }}
        />
        <CollectionBox
          item={{
            imagePath: "./assets/women.jpg",
            trendingText: "New Arrivals",
            collectionName: "Winter Collection",
            collectionDescription:
              "Checkout out best Winter Collection to stay warm and style out!",
          }}
        />
      </div>
    </>
  );
};

export default Collection;
