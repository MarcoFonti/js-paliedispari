// Check
console.log('JS OK');

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


/* REFUPERO ELEMENTI ID */
const titleElement = document.getElementById('title');
const paragraphElement = document.getElementById('paragraph');


/* CREO DOMANDA ALL'UTENTE */
const userWord = prompt('Inserisci una parola').trim();


/* CONTROLLO RISPOSTA */
console.log(userWord);


/* METTO LA FUNIONE IN UNA VARIBILE E GLI PASSO IL PARAMETRO DEL NOME CHE MI FORNISCE L'UTENTE */
const palindromicWord = isPalindromicWord(userWord);


/* CONDIZIONE SE NON CE USERWORD ED E' UN NUMERO */
if (!userWord || !isNaN(userWord)) {

    /* ALERT */
    alert ('Errore')


    /* ALTRIMENTI */
} else {

    /* CREO UNA VARIBILE DA MANIPOLARE NELLA CONDIZIONE */
    let message;


    /* SE IL NOME FORNITO DALL'UTENTE E' IDENTICO A LA MIA VARIBILE IN CUI HO SALVATO LA FUNZIONE */
    if (userWord === palindromicWord){

        /* RIASSEGNO VARIBILE MESSAGE */
        message = 'Parola palindroma'


        /* ALTRIMENTI */
    } else {

        /* RIASSEGNO VARIBILE MESSAGE */
        message = 'Parola non palindroma'
    }
    

    /* CONTROLLO RISPOSTA */
    console.log(message);
    
    
    /* STAMPO IN PASSAGINA IL MESSAGGIO CHE CORRISPONDE ALLA MIA CONDIZIONE */
    paragraphElement.innerText = message;
}


/* STAMPO NOME FORNITO DALL'UTENTE */
titleElement.innerText += userWord


/* --------------------------------------------------------------------------------------------------------------------------------- */


//! SCALETTA ESERCIZIO PARI E DISPARI
/*
1 Chiediamo con un prompt all'utente se vuole pari o dispari
2 Chiediamo con un prompt all'utente un numero da 1 a 5 
3 Creiamo un random da 1 a 5 dentro una funzione 
4 Facciamo la somma
5 Creiamo un if else dentro una funzione per stabile se è pari o dispari 
6 Stampiamo
*/


/* RECUEPERO ELEMENTI ID */
const userEvenShotsElement = document.getElementById('recipe-user');
const userNumberElement = document.getElementById('recipe-numberUser');
const randomElement = document.getElementById('recipe-random');
const sumElement = document.getElementById('recipe-sum');
const isEvenShotsElement = document.getElementById('recipe-evenShots');


/* CREO 2 DOMANDE DA FARE ALL'UTENTE E LE SALVO NELLE VARIBILI */
const userEvenShots = prompt('Scegli tra pari o dispari').trim();
const userNumber = parseInt(prompt('Dimmi un numero da 1 a 5'));


/* CONTROLLO RISPOSTA */
console.log(userEvenShots, userNumber);


/* CREO UNA VARIBILE SUM IN CUI SOMMO IL NUMERO CHE MI FORNISCE L'UTENTE CON IL NUMERO RANDOM */
const sum = userNumber + resultRandom 


/* CONTROLLO RISPOSTA */
console.log(sum);


/* CONTROLLO RISPOSTA FUNZIONE */
console.log (isEvenShots(sum));


/* METTO LA FUNZIONE IN UNA VARIABILE E PASSO IL PARAMETRO SUM(VARIBILE) */
const pageEvenShots = isEvenShots(sum);


/* STAMPO IN PAGINA */
userEvenShotsElement.innerText = userEvenShots;
userNumberElement.innerText = userNumber;
sumElement.innerText = sum;
randomElement.innerText = resultRandom;
isEvenShotsElement.innerText = pageEvenShots;


