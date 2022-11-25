console.log("connecté");
//je sélectionne et je stocke
const icone = document.querySelector("i");
console.log(icone);
const modale = document.querySelector(".modal");
console.log(modale);

//j'aplique un évènement et une action
icone.addEventListener("click", function () {
  console.log("icone cliqué");
  icone.classList.toggle("fa-times");
  modale.classList.toggle("change-modal");
});
