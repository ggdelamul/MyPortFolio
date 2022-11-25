const icone = document.querySelector("i");
const modale = document.querySelector(".modal");
icone.addEventListener("click", function () {
  console.log("icone cliqué");
  icone.classList.toggle("fa-times");
  modale.classList.toggle("change-modal");
});
