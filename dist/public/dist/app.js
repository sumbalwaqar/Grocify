/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./public/javascripts/app.js ***!
  \***********************************/
var addtoCart = document.querySelectorAll('.add-to-cart');
addtoCart.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // console.log(e);
    var food = JSON.parse(btn.dataset.food);
    console.log(food);
  });
});
/******/ })()
;