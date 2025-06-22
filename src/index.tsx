import './index.css';
import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom"; // Add this import

render(
  <BrowserRouter basename="/Shanikaportfolio">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
