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
const closeCross = document.querySelectorAll(".modal-container i");
console.log(knowMore);
console.log(cardModale);
console.log(closeCross);
function showModal(index) {
  cardModale[index].style.display = "block";
}
function listenClickLink(indice) {
  knowMore[indice].addEventListener("click", function (e) {
    e.preventDefault();
    showModal(indice);
  });
}
function displayModal(index) {
  cardModale[index].style.display = "none";
}

for (i = 0; i < knowMore.length; i++) {
  listenClickLink(i);
  closeCross[i].addEventListener("click", function () {
    console.log("croix cliqué", closeCross[i]);
  });
}
