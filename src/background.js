// This is used for most processing
// kyber is done here
// recieve data using "chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {});"
// use crypto.subtle for AES computations

console.log("\n--- Background.js loading ---");

import { MlKem768 } from "crystals-kyber-js";

//const recipient = new MlKem768();
//console.log(recipient);

// Test function
/*chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in background:", request);

  if (request.action === "test") {
    sendResponse({
      success: true,
      message: "Background is working!",
    });
  }

  return true; // Keep channel open for async
});
*/

async function genKeyPair() {
  let kPair = ["", ""];
  kPair = await recipient.generateKeyPair();

  return kPair;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, " received in background");

  if (request.action === "genKeys") {
    sendResponse({
      success: true,
      data: genKeyPair(),
    });
  }
  return true; // Keep channel open for async
});

console.log("--- Background.js completed ---\n");
