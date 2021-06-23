import React from "react";
import ReactDOM from "react-dom";

const yourName = "Gabriel Hernandez";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragrapahs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela YU.
//Copyright 2019.
