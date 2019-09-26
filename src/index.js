import React from "react";
import ReactDOM from "react-dom";

import './hover.css'
import "./App.css";
import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faLaptopCode,
  faUser,
  faTimesCircle,
	faSuitcase,
	faTerminal
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faLaptopCode, faUser, faSuitcase, faTimesCircle, faTerminal);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
