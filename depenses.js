const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transportNumber = Number(transportTexte); // Type : number ; unité : FCFA
const alimentationNumber = Number(alimentationTexte); // Type : number ; unité : FCFA
const loisirs = Number(loisirsTexte); // Type : number ; unité : FCFA
// TODO : calculez le total, le budget restant et budgetRespected.
console.log(" Le Budget total de "+ nom +" est de est:") // Type : string ; unité : FCFA
console.log(Number(transportTexte)+Number(alimentationTexte)+Number(loisirsTexte)) // Type : number ; unité : FCFA

console.log(" Le Budget restant de "+ nom +" est de est:") // Type : string
console.log(budget - (transportNumber + alimentationNumber + loisirs)) // Type : number ; unité : FCFA

console.log(" puisque budget - depenses donne:") // Type : string
console.log(budget > (transportNumber + alimentationNumber + loisirs)); // Type : boolean
console.log("le budget est respecté.\n\nCAS AWA avec Variation budget."); // Type : string

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
const VariationBudget = 30000; // Type : number ; unité : FCFA
const VariationTransportTexte = '12500'; // Type : string ; unité : FCFA
const VariationAlimentationTexte = '18300'; // Type : string ; unité : FCFA
const VariationLoisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const VariationTransportNumber = Number(VariationTransportTexte); // Type : number ; unité : FCFA
const VariationAlimentationNumber = Number(VariationAlimentationTexte); // Type : number ; unité : FCFA
const VariationLoisirsNumber = Number(VariationLoisirsTexte); // Type : number ; unité : FCFA
// TODO : calculez le total, le budget restant et budgetRespected.
console.log(" Le Budget total de "+ nom +" est de est:") // Type : string ; unité : FCFA
console.log(Number(VariationTransportTexte)+Number(VariationAlimentationTexte)+Number(VariationLoisirsTexte)) // Type : number ; unité : FCFA

console.log(" Le Budget restant de "+ nom +" est de est:") // Type : string
console.log(VariationBudget - (VariationTransportNumber + VariationAlimentationNumber + VariationLoisirsNumber)) // Type : number ; unité : FCFA

console.log(" puisque budget - depenses donne:") // Type : string
console.log(VariationBudget > (VariationTransportNumber + VariationAlimentationNumber + VariationLoisirsNumber)); // Type : boolean
console.log("le budget n'est pas respecté."); // Type : string


