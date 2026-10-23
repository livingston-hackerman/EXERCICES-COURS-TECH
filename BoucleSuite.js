const BilletMineur = 1500 // sont des constantes : ce sont des tarifs fixes
const BilletMajeur = 2500 // sont des constantes : ce sont des tarifs fixes

let age = 11 // on commence à compter à partir de 11 ans
let p = 1 // on commence à compter à partir de 1

do {
if (age < 16) {
  console.log("personne " + p + " age " + age + " prix du ticket " + BilletMineur)
  } 
else {
  console.log("personne " + p + " age " + age + " prix du ticket " + BilletMajeur)
}
age++; // ajout +1 à "let age" à chaque tour de la boucle do
p++;  // ajout +1 à "let p" à chaque tour de la boucle do
}while (age <= 20) // tand que age est inferieur ou égale à 16
