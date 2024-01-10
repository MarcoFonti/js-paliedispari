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


function isPalindromicWord(name){
const nameReverse = name.split('').reverse().join('');
return nameReverse;
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

function getRandom (min, max) {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min
    return randomNumber;
}

const resultRandom = (1, 5);



function isEvenShots (mess) {
    
    let message = 'Il numero della somma è: Dispari ';
    
    if (sum % 2 === 0) {
        message = 'Il numero della somma è: Pari'
        return message;
    } 

    console.log (message);
}




