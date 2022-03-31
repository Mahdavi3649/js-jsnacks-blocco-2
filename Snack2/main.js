/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */


    let number = parseInt(prompt("Insersci un numero"))

    if(number % 2 == 0){
        console.log("è pari: " + number);

    }else{
        number += 1;
        console.log(number);
    } 
