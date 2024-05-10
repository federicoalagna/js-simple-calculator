'use strict'

//aggiungo gli operandi per definire bene i due numeri e il simbolo e differenziarli
let operand1 = "";
let operator = "";
let operand2 = "";


//--creo una funzione per rendere operativi i bottoni e la parte del risultato
function addNumber(number) {
    let result = document.getElementById("result");
    if (operator === "") {
        operand1 += number;
        result.textContent = operand1;
    } else {
        operand2 += number;
        result.textContent = operand2;
    }
}

// funzione per impostare l'operatore
function setOperator(op) {
    operator = op;
}


//--aggiungo la funzione a ogni pulsante per far si che vengano mostrati i numeri inseriti
for (let i = 1; i <= 9; i++) {
    document.getElementById("pulsante-" + i).addEventListener("click", function() {
        addNumber(i.toString());
        console.log("Pulsante", i, "click");
        console.log("Risultato attuale:", result.textContent); 
    });
}


//--funzione per cancellare ciò che viene inserito
function cancNumber () {
    let result = document.getElementById("result");
    let currentResult = result.textContent;
    result.textContent = currentResult.slice(0, -1);
}

//pulsante cancella che evoca la funzione
document.getElementById("cancella").addEventListener("click", cancNumber);

// funzione per eseguire l'operazione matematica
function calculate() {
    let result = document.getElementById("result");
    let operationResult = 0;
    
    switch (operator) {
        case '+':
            operationResult = parseInt(operand1) + parseInt(operand2);
            break;
        case '-':
            operationResult = parseInt(operand1) - parseInt(operand2);
            break;
        case '*':
            operationResult = parseInt(operand1) * parseInt(operand2);
            break;
        case '/':
            if (parseInt(operand2) !== 0) {
                operationResult = parseInt(operand1) / parseInt(operand2);
            } else {
                result.textContent = "Error";
                return;
            }
            break;
    }
    
    result.textContent = operationResult;
}


document.getElementById("addizione").addEventListener("click", function() {
    setOperator('+');
});

document.getElementById("sottrazione").addEventListener("click", function() {
    setOperator('-');
});

document.getElementById("moltiplicazione").addEventListener("click", function() {
    setOperator('*');
});

document.getElementById("divisione").addEventListener("click", function() {
    setOperator('/');
});

document.querySelector(".orange").addEventListener("click", calculate);