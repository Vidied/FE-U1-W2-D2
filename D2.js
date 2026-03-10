/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 1;
let n2 = 2;

if (n1 > n2) {
  console.log(n1, "è minore di", n2);
} else {
  console.log(n2, "è maggiore di", n1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n5 = 5;

if (n1 === n5) {
  console.log(n1, "è uguale a", n5);
} else {
  console.log(n1, "non è uguale a", n5);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n45 = 45;

let divisibile = n45 % n5;
console.log(divisibile);

if (divisibile === 0) {
  console.log(n45, "è divisibile per 5");
} else {
  console.log(n45, "non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n4 = 4;
let n8 = 8;

// test
let prova8 = n4 + n4 === 8;
console.log(prova8); //true

prova8 = n4 + n2 === 8;
console.log(prova8); //false

if (n4 === 8 || n4 + n4 === 8 || n8 === 8) {
  console.log(
    "con",
    n4,
    "e",
    n8,
    "si ottiene direttamente un valore di 8 o lo prendono sommandosi/sottraendosi",
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 15;
let minSped = 50;
let costSped = 10;
let totale = totalShoppingCart + costSped;
if (totalShoppingCart >= 50) {
  totale = totalShoppingCart;
}

if (totalShoppingCart >= minSped) {
  console.log(
    "hai un carrello di",
    totalShoppingCart,
    "hai diritto alla promozione della spedizione gratuita, hai risparmiato",
    costSped,
  );
} else {
  console.log(
    "non hai raggiunto la quota minima per la promo spedizione gratuita, il tuo totale sarà di",
    totalShoppingCart,
    "+",
    costSped,
    "=",
    totale,
  );
}

// prova
totalShoppingCart = 55;
if (totalShoppingCart >= minSped) {
  console.log(
    "hai un carrello di",
    totalShoppingCart,
    "hai diritto alla promozione della spedizione gratuita, hai risparmiato",
    costSped,
  );
} else {
  console.log(
    "non hai raggiunto la quota minima per la promo spedizione gratuita, il tuo totale sarà di",
    totalShoppingCart,
    "+",
    costSped,
    "=",
    totale,
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let blackFriday = true;
if (blackFriday === true) {
  totalShoppingCart = totalShoppingCart * 0.8;
}
if (totalShoppingCart >= 50) {
  totale = totalShoppingCart;
} else {
  totale = totalShoppingCart + costSped;
}

if (totalShoppingCart >= minSped) {
  console.log(
    "hai un carrello di",
    totalShoppingCart,
    "hai diritto alla promozione della spedizione gratuita, hai risparmiato",
    costSped,
  );
} else {
  console.log(
    "non hai raggiunto la quota minima per la promo spedizione gratuita, il tuo totale sarà di",
    totalShoppingCart,
    "+",
    costSped,
    "=",
    totale,
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n11 = 11;
let n12 = 12;
let n13 = 13;

if (n11 > n12 && n11 > n13) {
  if (n12 > n13) {
    console.log(n11, n12, n13);
  } else console.log(n11, n13, n12);
} else if (n12 > n11 && n12 > n13) {
  if (n11 > n13) {
    console.log(n12, n11, n13);
  } else console.log(n12, n13, n11);
} else if (n11 > n12) {
  console.log(n13, n11, n12);
} else console.log(n13, n12, n11);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome = "Cinzia";

if (typeof nome === "string") {
  console.log(nome, "è una string");
} else {
  console.log(nome, "è un numero");
}

if (typeof n1 === "string") {
  console.log(n1, "è una string");
} else {
  console.log(n1, "è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (n11 % 2 === 0) {
  console.log(n11, "è un numero pari");
} else {
  console.log(n11, "è un numero disppari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

val = 3;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

val = 11;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.splice(2, 1);
console.log(me["skills"]);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeri = [];
numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.push(6);
numeri.push(7);
numeri.push(8);
numeri.push(9);
numeri.push(10);

console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri[numeri.length - 1] = 100;
console.log(numeri);
