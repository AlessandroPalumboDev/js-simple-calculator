'use strict';


// definisco variabile per il display della calcolatrice
const display = document.getElementById('result');

// Definisco variabile per i bottoni numerati dando a tutti la stessa classe in html
const numero = document.querySelectorAll('button.numero');

// Definisco la funzione che scriva sul display della clacolatrice
function scrivi(number) {
    if (display === '0') {
        display.innerText = number
    } else {
        display.innerText = + number
    };
};

// Creo un ciclo che per ogni numero cliccato usi la funzione che scrive sul display
for (let i = 0; i < numero.length; i++) {
    numero[i].addEventListener('click', () => {
        scrivi(numero[i].innerText);
    });
};

