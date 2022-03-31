/* SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
 */


//ciclo for
let somma = 0;
for (let i = 0; i < 5; i++) {
    const num_number = parseInt(prompt('Insert your number'));
    somma += num_number
}
console.log("The sum of all numbers entered: " + somma);



// ciclo while
let j = 0
let somma_2 = 0

while (j < 5) {
    const num_number = parseInt(prompt('Insert your number'));
    somma_2 += num_number;
    j++
}
console.log("The sum of all numbers entered: " + somma_2);