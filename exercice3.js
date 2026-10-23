const BilletMineur = 1500 // sont des constantes : ce sont des tarifs fixes
const BilletMajeur = 2500 // sont des constantes : ce sont des tarifs fixes
const ages = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] // est un tableau : une liste de 10 âges. ages[0] vaut 11, ages[9] vaut 20.
// On utilise let parce que ces valeurs changent pendant le programme.
let total = 0 // vides au départ.
let totalMineur = 0 // vides au départ.
let totalMajeur = 0 // vides au départ.
let totalReduction = 0 // vides au départ.
let BilletVenduMineur = 0 // vides au départ.
let BilletVenduMajeur = 0 // vides au départ.
let reduction = 500 // le montant de la remise pour une personne dont l'age est 18 et +

for (let p = 1; p <= ages.length; p++) { // p compte de 1 à 10 (ages.length vaut 10) : c’est le numéro de la personne.
  const age = ages[p - 1] // récupère l’âge de cette personne. On enlève 1 parce que p commence à 1 alors que le tableau commence à 0.
  if(age<16){
  console.log("personne " + p + " age " + age + " prix du ticket " + BilletMineur)
  BilletVenduMineur ++ // ce qui veut dire ajout+1
  total += BilletMineur  // ajoute 1500 à la caisse générale.
  totalMineur += BilletMineur // += veut dire « ajoute à la valeur actuelle ». x += 5 équivaut à x = x + 5
  }
  else {
  console.log("personne " + p + " age " + age + " prix du ticket " + BilletMajeur)
  BilletVenduMajeur ++
  total += BilletMajeur
  totalMajeur += BilletMajeur
  }
  if(age>=18) {  // Si elle a 18 ans ou plus, on ajoute 500 à totalReduction.
  totalReduction += reduction
  }
}
// Ces lignes sont après la boucle, donc elles s’exécutent une seule fois, quand tous les calculs sont finis
console.log("nombre de billets vendu au -16 ans : " + BilletVenduMineur)
console.log("nombre de billets vendu au 16 et+ : " + BilletVenduMajeur)
console.log("la recette des mineurs : " + totalMineur)
console.log("la recette des majeurs : " + totalMajeur)
console.log("la recette totale est : " + total)
console.log("le nouveau budget est : " +(total-totalReduction))
