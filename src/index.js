import React from "react";
import ReactDOM from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./hover.css";
import "./App.css";
import "./index.css";

import App from "./App";
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faLaptopCode,
  faUser,
  faTimesCircle,
  faSuitcase,
  // faTerminal,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome,
  faLaptopCode,
  faUser,
  faSuitcase,
  faTimesCircle,
  faAngleDoubleLeft
);

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
