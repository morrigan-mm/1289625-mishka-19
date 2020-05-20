svg4everybody();

var header = document.querySelector(".page-header");
var button = header.querySelector(".page-header__toggle");

header.classList.toggle("page-header--collapsed");
header.classList.remove("page-header--nojs");

button.addEventListener("click", function () {
  header.classList.toggle("page-header--collapsed");
});

var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");
var modalOpenButtons = document.querySelectorAll(".button-modal-open-js");

for (var i = 0; i < modalOpenButtons.length; i++) {
  modalOpenButtons[i].addEventListener("click", function () {
    modal.classList.add("modal--show");
    document.body.style.overflow = "hidden";
  });
}

overlay.addEventListener("click", function () {
  modal.classList.remove("modal--show");
  document.body.style.overflow = "";
});
