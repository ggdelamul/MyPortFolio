//Menu Mobile
const icone = document.querySelector("i");
const menuModale = document.querySelector(".modal");
icone.addEventListener("click", function () {
  console.log("icone cliqué");
  icone.classList.toggle("fa-times");
  menuModale.classList.toggle("change-modal");
});
//Modale
const knowMore = document.querySelectorAll(".knowMore");
const cardModale = document.querySelectorAll(".modal-container");
console.log(knowMore);
console.log(cardModale);

function showModal(index) {
  cardModale[index].style.display = "block";
}
