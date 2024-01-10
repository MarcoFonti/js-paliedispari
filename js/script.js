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

// Recupero id
const paragraphElement = document.getElementById('paragraph');
const userWord = prompt('Inserisci una parola').trim();

console.log(userWord);

const palindromicWord = isPalindromicWord(userWord);

if (!userWord || !isNaN(userWord)) {
    alert ('Errore')
} else {

    let message;

    if (userWord === palindromicWord){
        message = 'Parola palindroma'
    } else {
        message = 'Parola non palindroma'
    }
    
    console.log(message);
    
    paragraphElement.innerText = message;
}
*/

//! SCALETTA ESERCIZIO PARI E DISPARI
/*
1 Chiediamo con un prompt all'utente se vuole pari o dispari
2 Chiediamo con un prompt all'utente un numero da 1 a 5 
3 Creiamo un random da 1 a 5 dentro una funzione 
4 Facciamo la somma
5 Creiamo un if else dentro una funzione per stabile se è pari o dispari 
6 Stampiamo
*/

// Recupere id 

const userEvenShotsElement = document.getElementById('recipe-user');
const userNumberElement = document.getElementById('recipe-numberUser');
const randomElement = document.getElementById('recipe-random');
const sumElement = document.getElementById('recipe-sum');
const isEvenShotsElement = document.getElementById('recipe-evenShots');

const userEvenShots = prompt('Scegli tra pari o dispari').trim();
const userNumber = parseInt(prompt('Dimmi un numero da 1 a 5'));

console.log(userEvenShots, userNumber);

const sum = userNumber + resultRandom

console.log(sum);

console.log (isEvenShots());

const pageEvenShots = isEvenShots();

userEvenShotsElement.innerText = userEvenShots;
userNumberElement.innerText = userNumber;
sumElement.innerText = sum;
randomElement.innerText = resultRandom;
isEvenShotsElement.innerText = pageEvenShots;


