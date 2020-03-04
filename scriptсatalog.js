var basketLinks = document.querySelectorAll(".buy");
var basketPopup = document.querySelector(".basket-popup");
var basketClose = basketPopup.querySelector(".popup-close");
var basketContinue = basketPopup.querySelector(".button-continue");
var basketAdd = document.querySelector (".basket");

var bookmarkLinks = document.querySelectorAll(".get-bookmark");
var bookmarkAdd = document.querySelector (".bookmark");
  
[].forEach.call(basketLinks, function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("popup-show");
    if (!basketAdd.classList.contains("basket-active")) {
      basketAdd.classList.add("basket-active");
    }        
  });
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (basketPopup.classList.contains("popup-show")) {
    basketPopup.classList.remove("popup-show");
  }
});

basketContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (basketPopup.classList.contains("popup-show")) {
    basketPopup.classList.remove("popup-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basketPopup.classList.contains("popup-show")) {
      basketPopup.classList.remove("popup-show");
    }
  }
});

[].forEach.call(bookmarkLinks, function(item) {
  return item.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!bookmarkAdd.classList.contains("bookmark-active")) {
      bookmarkAdd.classList.add("bookmark-active")
    };        
  });
});
