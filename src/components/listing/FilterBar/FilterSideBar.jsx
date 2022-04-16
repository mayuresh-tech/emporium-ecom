import React from "react";

import "./FilterSideBar.css";

const FilterSideBar = () => {
  return (
    <aside id="side-container">
      <div className="opening-bar">
        <div className="side-ways">
          <p className="text-bold-weight p-medium">Filters</p>
          <button className="no-bg btn-text-primary">Clear All</button>
        </div>

        <div className="filter-section">
          <p className="text-bold-weight p-medium">Price</p>
          <div className="side-ways-center">
            <div className="side-ways">
              <p>100</p>
              <p>500</p>
              <p>1000+</p>
            </div>
            <input type="range" min="1" max="100" value="50" id="slider" />
          </div>
        </div>

        <div className="filter-section">
          <p className="text-bold-weight p-medium">Category</p>
          <div className="side-ways-center">
            <div className="side-ways-left big">
              <input type="checkbox" />
              <p>Mens collection</p>
            </div>
            <div className="side-ways-left big">
              <input type="checkbox" />
              <p>Womens collection</p>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <p className="text-bold-weight p-medium">Ratings</p>
          <div className="side-ways-center">
            <div className="side-ways-left big">
              <input type="radio" name="rating" />
              <p>4 star and above</p>
            </div>
            <div className="side-ways-left big">
              <input type="radio" name="rating" />
              <p>3 star and above</p>
            </div>
            <div className="side-ways-left big">
              <input type="radio" name="rating" />
              <p>2 star and above</p>
            </div>
            <div className="side-ways-left big">
              <input type="radio" name="rating" />
              <p>1 star and above</p>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <p className="text-bold-weight p-medium">Sort by</p>
          <div className="side-ways-center">
            <div className="side-ways-left big">
              <input type="radio" name="sort" />
              <p>Price - Low to High</p>
            </div>
            <div className="side-ways-left big">
              <input type="radio" name="sort" />
              <p>Price - High to Low</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSideBar;
