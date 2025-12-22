// Popup.js is used for front-end stuff
// shouldnt do kyber here and processing should be minimal
// use "chrome.runtime.sendMessage(...)" to send data/trigger background.js

console.log("\n--- popup.js loading ---\n");

chrome.runtime.sendMessage({ action: "test" }, (response) => {
  console.log("Response from background:", response);
});

console.log("\n--- popup.js completed ---\n");
