// window.onload = function () {
//     const showButton = document.getElementById("button-show");
//     const hideButton = document.getElementById("button-hide");
//     const kittyCatImage = document.getElementById("bean");
  
//     showButton.addEventListener("click", function () {
//       kittyCatImage.style.display = "block"; 
//     });
  
//     hideButton.addEventListener("click", function () {
//       kittyCatImage.style.display = "none"; 
//     });
//   };
  
// script.js
window.onload = function () {
    const heart = document.getElementById("heart");
    const animateButton = document.getElementById("animate-button");
    const showButton = document.getElementById("button-show");
    const hideButton = document.getElementById("button-hide");
    const kittyCatImage = document.getElementById("bean");
  
    animateButton.addEventListener("click", function () {
      heart.classList.toggle("dance-animation");
    });
  
    showButton.addEventListener("click", function () {
      kittyCatImage.style.display = "block"; // Show the image
    });
  
    hideButton.addEventListener("click", function () {
      kittyCatImage.style.display = "none"; // Hide the image
    });
  };
  