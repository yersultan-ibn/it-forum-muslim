const modal = document.querySelector(".modal-container");
const active = document.getElementById("active-modal");
window.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === active) {
    modal.classList.add("display");
  }
  if (e.target === modal) {
    modal.classList.remove("display");
    document.body.classList.add("hidden");
  }
});
