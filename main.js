'use strict'

//--creo una funzione per rendere operativi i bottoni e la parte del risultato
function addNumber(numero) {
    let result = document.getElementById("result");
    result.textContent += numero;
    console.log("Numero aggiunto:", numero);
}

//--aggiungo la funzione a ogni pulsante per far si che vengano mostrati sulla calcolatrice
for (let i = 1; i <= 9; i++) {
    document.getElementById("pulsante-" + i).addEventListener("click", function() {
        addNumber(i.toString());
        console.log("Pulsante", i, "click");
        console.log("Risultato attuale:", result.textContent); 
    });
  

}