/* Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
 */

let numeri = [4,66,71,28,51,33,19,7,23,14]

let nomi = ["John","Mark","Sam","Michel","Sara","Maria","Dale"]

let addElement;

while (numeri.length !== nomi.length) {

    if(numeri.length > nomi.length){
        const addElement = prompt("add your element in array list")
        nomi.push(addElement);

    }else if(nomi.length > numeri.length){
        nomi.push(addElement);

    }
    console.log(numeri,nomi);  
}

