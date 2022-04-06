import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="nav-box">
        <div id="nav-section">
          <div id="logo">
            <a href="/">
              <img
                id="main-logo"
                width="30px"
                height="30px"
                src="favicon.svg"
                alt="Logo"
              />
              <div>Emporium</div>
            </a>
          </div>

          <div id="nav-search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
            <input
              className="form-input-field search-bar"
              type="text"
              placeholder="Type here..."
            />
          </div>
        </div>

        <div id="nav-section-mobile">
          <div id="burger-menu">
            <button className="no-bg" id="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </button>
          </div>
        </div>

        <div id="mobile-section">
          <ul className="">
            <li className="logo-top">
              <div id="logo-container">
                <div id="logo">
                  <img
                    id="main-logo"
                    width="30px"
                    height="30px"
                    src="favicon.svg"
                    alt="Logo"
                  />
                  <div>Emporium</div>
                </div>
                <button id="cancel" className="no-bg cancel-btn">
                  X
                </button>
              </div>
            </li>
            <li className="nav-link-box">
              <a href="./index.html">Home</a>
            </li>
            <li className="nav-link-box">
              <a href="documentation/docs.html" target="_blank">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        <div id="end-nav-content">
          <button onClick={null} className="btn-solid-primary">
            Login / Signup
          </button>
          <button onClick={null} className="no-bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
            </svg>
          </button>
          <button onClick={null} className="no-bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
