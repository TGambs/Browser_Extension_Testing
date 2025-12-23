// Popup.js is used for front-end stuff
// shouldnt do kyber here and processing should be minimal
// use "chrome.runtime.sendMessage(...)" to send data/trigger background.js

// Popup.js is used for front-end stuff
// shouldnt do kyber here and processing should be minimal
// use "chrome.runtime.sendMessage(...)" to send data/trigger background.js

console.log("\n--- popup.js loading ---\n");

// Function to request new key pair
async function getNewKeyPair() {
  try {
    const response = await chrome.runtime.sendMessage({ action: "genKeys" });
    console.log("Response from background:", response);

    if (response.success) {
      const output = `
        <strong>Key Pair Generated!</strong><br><br>
        Raw PK: ${response.rawPK}<br>
        Raw SK: ${response.rawSK}<br>
        Public Key Length: ${response.publicKeyLength} bytes<br>
        Secret Key Length: ${response.secretKeyLength} bytes<br><br>
        <small>Public Key (base64): ${response.publicKey.substring(
          0,
          50
        )}...</small><br>
        <small>Secret Key (base64): ${response.secretKey.substring(
          0,
          50
        )}...</small>
      `;
      document.getElementById("keyGenOutput").innerHTML = output;
    } else {
      document.getElementById(
        "keyGenOutput"
      ).innerHTML = `<strong>Error:</strong> ${response.error}`;
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById(
      "keyGenOutput"
    ).innerHTML = `<strong>Error:</strong> ${error.message}`;
  }
}

// Wait for DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  const genKeysBtn = document.getElementById("genKeysBtn");

  if (genKeysBtn) {
    genKeysBtn.addEventListener("click", getNewKeyPair);
    console.log("Key generation button listener attached");
  } else {
    console.error("genKeysBtn not found in DOM");
  }
});

console.log("\n--- popup.js completed ---\n");
