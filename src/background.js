// This is used for most processing
// kyber is done here
// recieve data using "chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {});"

console.log("\n--- Background.js loading ---");

/*
import kyber from "../src/kyber.js";

console.log("Kyber loaded from background:", kyber);
//generate a public key
let pk = kyber.KeyGen512();
//print it to console
console.log(pk);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in background:", request);

  if (request.action === "test") {
    sendResponse({
      success: true,
      message: "Background is working!",
      kyberAvailable: typeof kyber !== "undefined",
    });
  }

  return true; // Keep channel open for async
});
*/

console.log("--- Background.js completed ---\n");
