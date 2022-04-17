import React from "react";
import { useData } from "../../../context/DataContext/DataContext";

import "./FilterSideBar.css";

const FilterSideBar = () => {
  const { data, dispatch } = useData();

  return (
    <aside id="side-container">
      <div className="opening-bar">
        <div className="side-ways">
          <p className="text-bold-weight p-medium">Filters</p>
          <button
            onClick={() => dispatch({ type: "CLEAR" })}
            className="no-bg btn-text-primary"
          >
            Clear All
          </button>
        </div>

        <div className="filter-section">
          <p className="text-bold-weight p-medium">Price</p>
          <div className="side-ways-center">
            <div className="side-ways">
              <p>100</p>
              <p>5000</p>
              <p>10000</p>
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "PRICE", payload: e.target.value })
              }
              type="range"
              min="100"
              max="10000"
              defaultValue={data.price}
              step="100"
              id="slider"
            />
          </div>
        </div>

        <div className="filter-section">
          <p className="text-bold-weight p-medium">Category</p>
          <div className="side-ways-center">
            <div className="side-ways-left big">
              <input
                onChange={() => dispatch({ type: "MEN" })}
                checked={data.men === true}
                type="checkbox"
              />
              <p>Mens collection</p>
            </div>
            <div className="side-ways-left big">
              <input
                onChange={() => dispatch({ type: "WOMEN" })}
                checked={data.women === true}
                type="checkbox"
              />
              <p>Womens collection</p>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <p className="text-bold-weight p-medium">Ratings</p>
          <div className="side-ways-center">
            <div className="side-ways-left big">
              <input
                onClick={() => dispatch({ type: "RATING", payload: 4 })}
                type="radio"
                name="rating"
              />
              <p>4 star and above</p>
            </div>
            <div className="side-ways-left big">
              <input
                onClick={() => dispatch({ type: "RATING", payload: 3 })}
                type="radio"
                name="rating"
              />
              <p>3 star and above</p>
            </div>
            <div className="side-ways-left big">
              <input
                onClick={() => dispatch({ type: "RATING", payload: 2 })}
                type="radio"
                name="rating"
              />
              <p>2 star and above</p>
            </div>
            <div className="side-ways-left big">
              <input
                onClick={() => dispatch({ type: "RATING", payload: 1 })}
                type="radio"
                name="rating"
              />
              <p>1 star and above</p>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <p className="text-bold-weight p-medium">Sort by</p>
          <div className="side-ways-center">
            <div className="side-ways-left big">
              <input
                onClick={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
                type="radio"
                name="sort"
              />
              <p>Price - Low to High</p>
            </div>
            <div className="side-ways-left big">
              <input
                onClick={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
                type="radio"
                name="sort"
              />
              <p>Price - High to Low</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSideBar;
