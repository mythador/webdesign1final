"use strict";

/*
   Web Design 1
   Unit 3 Project
   
   Resume Website
   Author: Jason White
   Date:   05/08/2024

   Filename: scripts.js
*/

/* Variables */

/* Functions */

/* Called on resume.html print resume button */
function printResume() {
   window.print();
}

/* Nice little clock in the footer span of pages */
function startTime() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
  setTimeout(function() {startTime()}, 1000);
}
