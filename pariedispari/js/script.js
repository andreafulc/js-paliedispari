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


-- Rifletto-- 

non mi piace che se inserisco una parola sbagliata mi fa comunque inserire poi altro, dopo il commit e il push vorrei lavorare per bloccare i due prompt e farli ripetere se non sono soddisfatti i requisiti. (RISOLTO credo)


*/

//Pari e Dispari
//utente sceglie tra pari e dispari
 

// l'utente inserisce pari e dispari e un numero da 1 a 6
let odd;
do {
    odd = prompt("Scegli tra 'pari' o 'dispari':").toLowerCase().trim();
} while (odd !== "pari" && odd !== "dispari");

let num;
do {
    num = parseInt(prompt("Scegli un numero tra 1 e 6:"));
} while (isNaN(num) || num < 1 || num > 6);

//stampo i numeri scelti dall'utente
console.log(odd, num);

//genero il lancio di dado per il computer
const numComputer = getRndInteger(1, 6);

//stampo il numero del computer
console.log(numComputer);

//sommo i due numeri
const somma = num + numComputer;

//stampo la somma
console.log(somma);

//dichiaro chi ha vinto
if (isEven(somma) == true && odd == "pari") {
    console.log("Hai vinto");
} else if (isEven(somma) == false && odd == "dispari") {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}

//FUNZIONI

//stabilisco se la somma dei due numeri è pari o dispari con funzione
function isEven (num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//dado
function getRndInteger (min, max) {
    return Math. floor (Math. random() * (max - min + 1) ) + min;
}