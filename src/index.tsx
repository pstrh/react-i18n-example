import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import MySimpleIntlApp from "./MySimpleIntlApp";
import "bootstrap/dist/css/bootstrap.min.css";

const mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);

// Uncomment to use code example from the JavaMagazin article
// ReactDOM.render(<MySimpleIntlApp />, mountNode);


