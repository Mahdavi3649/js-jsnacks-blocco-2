/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 */


const numeri_interni = [3,14,22,6,41,9,11,13,7,1,16,19,2]

// ciclo for
let somma = 0;
for (let i = 0; i < numeri_interni.length; i++) {
    const numero = numeri_interni[i];
    
    if(i % 2 != 0){
        somma += numero
    }
}
console.log(somma);


// ciclo while
let somma_2 = 0;
let j = 0;
while(j < numeri_interni.length){
    const numero = numeri_interni[j];

    if(j % 2 != 0){
        somma_2 += numero
    }
    j++
}
console.log(somma_2);

