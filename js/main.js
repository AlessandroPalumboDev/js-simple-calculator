'use strict';

// definisco variabile per il display della calcolatrice
let display = document.getElementById('result');

// Definisco variabile per i bottoni numerati dando a tutti la stessa classe in html
const numero = document.querySelectorAll('button.numero');

// Definisco la funzione che scriva sul display della clacolatrice
function scrivi(number) {
    // per sostituire lo zero che è presente nel DOM, altrimenti concatena
    if (display.innerText === '0') {
        display.innerText = number
    } else {
        display.innerText += number
    };
};

// Creo un ciclo che per ogni numero cliccato usi la funzione che scrive sul display
for (let i = 0; i < numero.length; i++) {
    numero[i].addEventListener('click', () => {
        scrivi(numero[i].innerText)
    });
};


// Definisco variabile per i bottoni operatore dando a tutti un id diverso in html
let piu = document.getElementById('piu');
let meno = document.getElementById('meno');
let per = document.getElementById('per');
let diviso = document.getElementById('diviso');

// Definisco variabili di numero-1 numero-2 e operatore
let numero1;
let numero2;
let operatore;

// Definisco la funzione che al click del pulsante operatore modifica la variabile del primo numero e quella dell'operatore e resetti il display
function opera() {
    numero1 = Number(display.innerText);
    display.innerText = '0';
    if (operatori[0] === piu) {
        operatore = piu
    } else if (operatori[1] === meno) {
        operatore = meno
    } else if (operatori[2] === per) {
        operatore = per
    } else if (operatori[3] === diviso) {
        operatore = diviso
    }
};

// Definisco una variabile operatore dando la stessa classe a tutti i pulsanti operatore 
const operatori = document.querySelectorAll('button.operatori');

//  Uso la classe operatore per fare un ciclo for che usi la funzione che resetta il display e modifichi le variabili numero-1 e quella operatore dandogli un event listener
for (let i = 0; i < operatori.length; i++) {
    operatori[i].addEventListener('click', () => {
        opera()
    });
};






