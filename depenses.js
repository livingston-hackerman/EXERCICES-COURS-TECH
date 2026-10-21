const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transportNumber = Number(transportTexte);
const alimentationNumber = Number(alimentationTexte);
const loisirs = Number(loisirsTexte);
// TODO : calculez le total, le budget restant et budgetRespected.
console.log(" Le Budget total de "+ nom +" est de est:")
console.log(Number(transportTexte)+Number(alimentationTexte)+Number(loisirsTexte))

console.log(" Le Budget restant de "+ nom +" est de est:")
console.log(budget - (transportNumber + alimentationNumber + loisirs))

console.log(" puisque budget -depenses donne:")
console.log(budget > (transportNumber + alimentationNumber + loisirs));
console.log("le budget est respecté.");
// TODO : affichez le rapport uniquement avec des littéraux de gabarit.

