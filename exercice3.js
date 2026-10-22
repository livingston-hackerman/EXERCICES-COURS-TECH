const BilletMineur = 1500
const BilletMajeur = 2500
const ages = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let p = 1; p <= ages.length; p++) {
  const age = ages[p - 1]
  if(age<16){
  console.log("personne " + p + " age " + age + " prix du ticket " + BilletMineur)
  }
  else {
  console.log("personne " + p + " age " + age + " prix du ticket " + BilletMajeur)
  }

let r = BilletMineur;
while (age < 16) {
    console.log(r);
    r += 1500;
    r++;
}
console.log(" il me faut " +i+ " semaines pour acheter GTA6 ");