// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the navigation bar content
  fetch("source/navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insert the navigation bar into the container
      document.getElementById("navbar-container").innerHTML = data;
    });
});