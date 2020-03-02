var link = document.querySelector(".button-map");
var popup = document.querySelector(".login-popup");
var close = popup.querySelector(".popup-close");
var login = popup.querySelector("[name=name-feetback]");
var email = popup.querySelector("[name=email-feetback]");
var text = popup.querySelector("[name=text-feetback]");

var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".map-image");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".popup-close");
  
try {
  storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
  }
  
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storage) {
    login.value = storage;
    e-mail.focus();
  } else {
      login.focus();
    }
});
  
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});
  
popup.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    console.log("Нужно ввести данные");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
}); 

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("popup-show")) {
      mapPopup.classList.remove("popup-show");
    }
  }
});