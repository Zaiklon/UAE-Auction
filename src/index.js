import React from "react";
import ReactDOM from "react-dom";
import "bootstrap3/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ar from "react-intl/locale-data/ar";
import "./index.css";
import Home from "./pages/home";
import registerServiceWorker from "./registerServiceWorker";

addLocaleData(en);
addLocaleData(ar);

window.language = "en";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
