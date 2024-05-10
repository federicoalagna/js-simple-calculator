'use strict'

//--creo una funzione per rendere operativi i bottoni e la parte del risultato
function addNumber(numero) {
    let result = document.getElementById("result");
    result.textContent += numero;
    console.log(result)
}

//--aggiungo la funzione a ogni pulsante per far si che vengano mostrati sulla calcolatrice
document.getElementById("pulsante-1").addEventListener("click", function() {
    addNumber("1");
});