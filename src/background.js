// This is used for most processing
// kyber is done here
// recieve data using "chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {});"
// use crypto.subtle for AES computations
import { MlKem768 } from "crystals-kyber-js";

console.log("\n--- Background.js loading ---");

//create instance
const recip = new MlKem768();

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

// Generate key pair
async function genKeyPair() {
  try {
    const [publicKey, secretKey] = await recip.generateKeyPair();

    // Convert to base64 for easy transmission
    const pkBase64 = btoa(String.fromCharCode(...publicKey));
    const skBase64 = btoa(String.fromCharCode(...secretKey));

    return {
      success: true,
      publicKey: pkBase64,
      secretKey: skBase64,
      publicKeyLength: publicKey.length,
      secretKeyLength: secretKey.length,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in background:", request);

  if (request.action === "genKeys") {
    // Call the async function and wait for result
    genKeyPair()
      .then((result) => {
        sendResponse(result);
      })
      .catch((error) => {
        sendResponse({
          success: false,
          error: error.message,
        });
      });

    return true; // Keep channel open for async
  }

  return true;
});

console.log("--- Background.js completed ---\n");
