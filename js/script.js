// Check
console.log('JS OK');

//! SCALETTA

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
}


