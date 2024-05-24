// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("radius")
  console.log(radius)

  // process
  const volume = 4.0 / 3.0 * Math.PI * Math.pow(radius, 3)
  const dimensions =
    "<ul>\n<li>radius = " +
    "</li>\n</ul>"

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML = "Volume is: " + volume + " mm³"
}
