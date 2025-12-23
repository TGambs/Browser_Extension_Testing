// This is used for most processing
// kyber is done here
// recieve data using "chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {});"

console.log("\n--- Background.js loading ---");

import { MlKem768 } from "crystals-kyber-js";
const recipient = new MlKem768();
console.log(recipient);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in background:", request);

  if (request.action === "test") {
    sendResponse({
      success: true,
      message: "Background is working!",
    });
  }

  return true; // Keep channel open for async
});

console.log("--- Background.js completed ---\n");
