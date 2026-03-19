const celleTombola = document.getElementById("celleTombola");
const celleTombolaArray = [];
const numeriDaPescare = [];
const numeriPescati = [];
for (let i = 1; i <= 90; i++) {
  const celle = document.createElement("div");
  celle.classList.add("celle");
  celle.textContent = i;
  numeriDaPescare.push(i);
  celleTombola.appendChild(celle);
  celleTombolaArray.push(celle);
}
console.log(numeriDaPescare);
const bottoneId = document.getElementById("bottoneId");
bottoneId.addEventListener("click", function () {
  let indiceCelle = Math.floor(Math.random() * numeriDaPescare.length);
  celleTombolaArray[indiceCelle].classList.add("selezionata");
  numeriPescati.push(numeriDaPescare[indiceCelle]);
  if (numeriDaPescare.length === 0) {
    console.log("TOMBOLA AL TABELLONE");
    return;
  }
  let numeroEstratto = numeriDaPescare[indiceCelle];
  celleTombolaArray[numeroEstratto - 1].classList.add("selezionata");
  numeriPescati.push(numeroEstratto);
  numeriDaPescare.splice(indiceCelle, 1);
  console.log("Estratto:", numeroEstratto);
});
