const modal = document.querySelector(".modal-container");
const active = document.querySelectorAll("#active-modal");
window.addEventListener("click", (e) => {
  console.log(e.target);
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
