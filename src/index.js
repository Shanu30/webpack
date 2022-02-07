import {add} from "./calc"

import React from "react";
import { ReactDOM } from "react-dom";

import("./index.css")

console.log(add(5,5));



//const h1 = document.createElement("h1");
//h1.innerText = "Webpack is a library or tool that bundles your code";
//h1.classList.add("red")
//
//document.getElementById("container").appendChild(h1)

ReactDOM.render(
    React.createElement("h1",{className: "redtext"}, "Webpack is a library or tool that bundles your code"),
    document.getElementById("container")
)