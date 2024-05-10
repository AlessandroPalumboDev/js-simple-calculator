 Riprendiamo l'esercizio della calcolatrice fatto con HTML e CSS e rendiamo il tutto funzionale.

 Attenzione: la nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.

 MILESTONE 1
    Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto

 MILESTONE 2
    Aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto

 MILESTONE 3
    Aggiungere event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto

 MILESTONE 4
    Pulsante canc: cliccando il pulsante si resetta il calcolo

 BONUS
    Verificare che non si stia cercando di dividere per 0

 Potete usare il codice di partenza che vi invio in allegato.

- MILESTONE 1
    - Uso codice html e css di partenza inviato
    - definisco variabile per il display della calcolatrice
    - Definisco variabile per i bottoni numerati dando a tutti la stessa classe in html
    - Definisco la funzione che (COMMENTO <!---"concatenarlo al numero visualizzato in alto" -->) scriva sul display della clacolatrice
    - Creo un ciclo che (COMMENTO <!---"Aggiungere event listener a tutti i numeri"-->) per ogni numero cliccato usi la funzione che scrive sul display

-  MILESTONE 2
   - Definisco variabili di numero-1 numero-2 e operatore usato e risultato
   - Definisco variabile dei 4 operatori
   - Assegno even listener ai 4 operatori che al click eseguino la funzione opera
   - Definisco la funzione che (COMMENTO <!-- "quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando" -->) al click del pulsante operatore modifica la variabile del primo numero e quella dell'operatore e resetti il display 

- MILESTONE 3
   - Definisco variabile per il bottone uguale con un ID
   - Definisco la funzione che (COMMENTO<!-- "salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto" -->) salva il secondo numero, esegue la specifica operazione e visualizza risultato sul display
   - Aggiungo even listener al bottone uguale che al click invochi la funzione

- MILESTONE 4
   - Definisco una variabile per il tasto canc con un ID
   - Definisco la funzione che resetti il display e tutti i numeri inseriti e l'operatore
   - Aggiungo un event listener al tasto canc che al click esegui la funzione di reset

- BONUS
   - Aggiungo un IF aggiuntivo all' interno dell' if della funzione operazioni con una condizione per la quale che se il secondo numero è uguale a 0 risulta errore