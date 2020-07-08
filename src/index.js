import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContext from "./themeContext/ThemeContext";

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById("root")
);
