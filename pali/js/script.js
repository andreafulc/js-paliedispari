/*
TRACCIA

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (provate a implementare questa funzione con il ciclo for)


RAGIONAMENTO

1. Chiedo all'utente di inserire una parola tramite un prompt e la salvo in una variabile

2. Creo una funzione per capire se la parola inserita è palindroma e la lascio in fondo al codice

3. Una volta dentro alla funzione, creo una variabile per salvare la parola invertita

4. Creo un ciclo for per invertire la parola inserita dall'utente

5. Creo una condizione per verificare se la parola inserita è palindroma

6. Stampo un messaggio all'utente con la condizione se

*/

//Palindromo
//utente inserisce la parola
const parola = prompt("Inserisci una parola");

//stampo risultato per utente

if (palindroma(parola) == false) {
    console.log("La parola non è palindroma");
} else {
    console.log("La parola è palindroma");
}


/////////////////////////////
//FUNZIONI
//funzione per capire se la parola è palindroma che devo buttare in fondo

function palindroma(parola) {
    let parolaInversa = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInversa += parola[i];
    }
    if (parola === parolaInversa) {
        return true;
    } else {
        return false;
    }
}


