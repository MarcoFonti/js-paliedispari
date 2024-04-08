//! SCALETTA ESERCIZIO PALINDROMA

/*
1 Creiamo un prompt
2 Creiamo una funzione
    - 2a Metodo split
    - 2b Metodo reverse
    - 2c metdo join
3 Validazione
4 Creiamo un if 
5 Stampiamo
*/


/* CREO FUNZIONE IN CUI PASSO COME ARGOMENTO LA VARIBILE USERWORD */
function isPalindromicWord(name){

/* CREO UNA VARIBILE
SPLIT: CONVERTO LA STRINGA IN UN ARRAY DI SINGOLI CARATTERI
REVERSE: INVERTO ORDINE DEGLI ELEMENTI ALL'INTERNO DELL'ARRAY
JOIN: RIUNISCO GLI ELEMENTI DELL'ARRAY IN UNA STRIGA IN MODO CHE LA STRINGA SIA CONVERTITA
*/
const nameReverse = name.split('').reverse().join('');


/* RESTITUISCO LA VARIBILE */
return nameReverse;


}


//! SCALETTA ESERCIZIO PARI E DISPARI

/*
1 Chiediamo con un prompt all'utente se vuole pari o dispari
2 Chiediamo con un prompt all'utente un numero da 1 a 5 
3 Creiamo un random da 1 a 5 dentro una funzione 
4 Facciamo la somma
5 Creiamo un if else dentro una funzione per stabile se è pari o dispari 
6 Stampiamo
*/

/* CREO UNA FUNZIONE A CUI MANDO 2 ARGOMENTI DELLA VARIBILE RESULTRANDOM*/
function getRandom (min, max) {

    /* CREO UNA VARIBILE IN CUI SALVO I NUMERI RANDOM*/
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min

    /* RESTITUISCO LA VARIBILE SALVATA */
    return randomNumber;
}

/* ARGOMENTI DA PASSARE NELLA FUNZIONE GETRANDOM */
const resultRandom = getRandom(1, 5);


/* CREO UNA FUNZIONE*/
function isEvenShots (sum) {
    
    /* CREO UNA VARIBILE DA MANIPOLARE NELLA CONDIZIONE */
    let message = 'Il numero della somma è: Dispari ';
    
    /* SE LA VARIBILE SUM E' MULTIPLA DI 2 */
    if (sum % 2 === 0) {

        /* RINOMINO LA VARIBILE MESSAGE  */
        message = 'Il numero della somma è: Pari'

        /* RESTITUISCO LA VARIBILE */
        return message;

    } 

    /* CONTROLLO RISPOSTA */
    console.log (message);
}





