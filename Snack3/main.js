/* Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. */

const nomi = ["john","Mark","Sam","Paul","jeff"]
const cognomi = ["Dalley","Bride","Mahdavi","Saron","Leech"]
const invitati = [];

for (let i = 0; invitati.length < nomi.length; i++) {
    const nome = nomi[i];
    const cognome = cognomi[i];
    invitati.push(`${nome} ${cognome}`);
}
console.log(invitati);

