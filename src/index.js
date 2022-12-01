import React from "react";
import ReactDOM from "react-dom";
import {createRoot } from "react-dom/client"
import "./index.css";
import App from "./container/App"
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)

//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

serviceWorker.unregister();
