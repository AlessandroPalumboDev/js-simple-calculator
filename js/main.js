'use strict';

// MILESTONE 1

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

// MILESTONE 2

// Definisco variabili di numero-1 numero-2 operatore usato e risultato
let numero1;
let numero2;
let operatore;
let risultato;

// Definisco variabili dei 4 operatori
let piu = document.getElementById('piu');
let meno = document.getElementById('meno');
let per = document.getElementById('per');
let diviso = document.getElementById('diviso');

// Assegno even listener ai 4 operatori che al click eseguino la funzione opera
piu.addEventListener('click', () => {opera(piu)});
meno.addEventListener('click', () => {opera(meno)});
per.addEventListener('click', () => {opera(per)});
diviso.addEventListener('click', () => {opera(diviso)});

// Definisco la funzione che modifica la variabile del primo numero e resetti il display e salvi l'operatore
function opera(oper) {
    // salvo numero1
    numero1 = display.innerText;

    // resetto il display
    display.innerText = '0';

    // salva l'operatore
    operatore = oper;
};

// MILESTONE 3

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
        display.innerText = (Number(numero1) * Number(numero2));
    }
    else if (operatore === diviso) {
        if (numero2 !== '0') {
            display.innerText = Number(numero1) / Number(numero2);
        } else {
            display.innerText = 'non puoi dividire per 0';
        };
    } else {
        display.innerText = '0'
    };
};

// Aggiungo even listener al bottone uguale che al click invochi la funzione
uguale.addEventListener('click', () => {
    operazione()
});

// Definisco una variabile per il tasto canc con un ID
const canc = document.getElementById('canc');

// Definisco la funzione che resetti il display e tutti i numeri inseriti l'operatore e il risultato
function reset() {
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