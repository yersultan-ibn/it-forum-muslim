const modal = document.getElementById("modal");
const active = document.getElementById("active-modal");
const initModal = () => {
  modal.classList.add("display");
  document.body.classList.add("hidden");
  console.log('dsd')
  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal" || e.target.id == "close") {
      modal.classList.remove("display");
      document.body.classList.remove("hidden");
    }
  });
};

// Получаем элементы
var burger = document.querySelector(".burger");
var overlay = document.querySelector(".overlay");
var nav = document.querySelector("nav");
var body = document.body;

// Добавляем обработчик клика на элементы
burger.addEventListener("click", function () {
  burger.classList.toggle("clicked");
  overlay.classList.toggle("show");
  nav.classList.toggle("show");
  body.classList.toggle("overflow");
});

overlay.addEventListener("click", function () {
  burger.classList.remove("clicked");
  overlay.classList.remove("show");
  nav.classList.remove("show");
  body.classList.remove("overflow");
});
