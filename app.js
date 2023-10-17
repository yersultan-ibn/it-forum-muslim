const modal = document.querySelector(".modal-container");
const active = document.querySelectorAll("#active-modal");
const modalCloseBtn = document.querySelector("#close-modal-btn")
window.addEventListener("click", (e) => {
  active.forEach((item) => {
    if (e.target === item) {
      modal.classList.add("display");
      document.body.classList.add("hidden");
    }
    if (e.target === modal) {
      modal.classList.remove("display");
      document.body.classList.remove("hidden");
    }
  });
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("display");
  document.body.classList.remove("hidden");
})