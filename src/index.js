import React from 'react';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from "./App";

import { makeServer } from "./server";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Call make Server
makeServer();

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);