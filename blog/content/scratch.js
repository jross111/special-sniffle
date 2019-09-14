function abbrevName(name){
  let names = name.toUpperCase().split(' ')
  return names[0][0] + "." + names[1][0]

}
console.log(abbrevName("jamie ross"))

console.log(abbrevName("am Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");



const abbrevName(name) => {
    let names = name.toUpperCase().split(' ')
  return names[0][0] + "." + names[1][0]
}