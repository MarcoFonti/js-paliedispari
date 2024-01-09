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

function isPalindromicWord(name){
const nameReverse = name.split('').reverse().join('');
return nameReverse;
}
