console.log("This is a popup!");

// using the npm installed version of KYBER
const kyber = require("crystals-kyber");

// generate a public key
let pk = kyber.KeyGen512();
// print it to console
console.log(pk);
