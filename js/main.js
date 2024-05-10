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

// Definisco variabili di numero-1 numero-2 operatore e risultato
let numero1;
let numero2;
let operatore;
let risultato;

// Definisco la funzione che al click del pulsante operatore modifica la variabile del primo numero e quella dell'operatore e resetti il display
function opera() {

    // salvo numero1
    numero1 = display.innerText;

    // resetto il display
    display.innerText = '0';

    // cambio l'operatore in base a quello selezionato
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

// Definisco variabile per il bottone uguale con un ID
let uguale = document.getElementById('uguale');

// Definisco la funzione che salva il secondo numero, esegue la specifica operazione e visualizza risultato sul display
function operazione() {

    // salvo numero2
    numero2 = display.innerText;

    // faccio l'operazione in base all'operatore e visualizzo direttamente il risultato sul display
    if (operatore === piu) {
        display.innerText = Number(numero1) + Number(numero2);
    } else if (operatore === meno) {
        display.innerText = Number(numero1) - Number(numero2);
    }
    else if (operatore === per) {
        display.innerText = Number(numero1) * Number(numero2);
    }
    else if (operatore === diviso) {
        display.innerText = Number(numero1) / Number(numero2);
    }
    else {
        display.innerText = '0'
    }
};

// Aggiungo even listener al bottone uguale che al click invochi la funzione
uguale.addEventListener('click', () => {
    operazione()
});

// Definisco una variabile per il tasto canc con un ID
const canc = document.getElementById('canc');

// Definisco la funzione che resetti il display e tutti i numeri inseriti l'operatore e il risultato
function reset(){
    numero1 = '';
    numero2 = '';
    display.innerText = '0';
    operatore = '';
};

// Aggiungo un event listener al tasto canc che al click esegui la funzione di reset
canc.addEventListener('click', () => {
    reset()
});

// se digito "risultato" in cosole veedo il risultato dell'operazione
risultato = display.innerText;





