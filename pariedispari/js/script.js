/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 6.
Generiamo un numero random (sempre da 1 a 6) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

RAGIONAMENTO

1. Chiedo all'utente di scegliere tra pari e dispari e di inserire un numero da 1 a 6 tramite un prompt e li salvo in due variabili (devo capire come fare a non far partire il secondo prompt se non è soddisfatto il primo. Forse con un ciclo while)

2.stampo i numeri scelti dall'utente

3. genero il lancio di dado per il computer e lo salvo in una variabile

4. Creo una variabile per salvare la somma dei due numeri

5. Creo una funzione per stabilire se la somma dei due numeri è pari o dispari e la lascio in fondo al codice

*/

//Pari e Dispari
//utente sceglie tra pari e dispari
const odd = prompt("Scegli tra pari e dispari");


//utente inserisce un numero da 1 a 6
const num = parseInt(prompt("Inserisci un numero da 1 a 6"));

//stampo i numeri scelti dall'utente
console.log(odd, num);

