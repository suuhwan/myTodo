import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./component/App";
import reportWebVitals from "./reportWebVitals";

const rootNode = document.getElementById("root");

ReactDOMClient.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
