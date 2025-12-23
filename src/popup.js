// Popup.js is used for front-end stuff
// shouldnt do kyber here and processing should be minimal
// use "chrome.runtime.sendMessage(...)" to send data/trigger background.js

console.log("\n--- popup.js loading ---\n");

function getNewKeyPair() {
  chrome.runtime.sendMessage({ action: "genKeys" }, (response) => {
    console.log(response);
  });

  document.getElementById("keyGenOutput").innerHTML = response;
}

console.log("\n--- popup.js completed ---\n");
