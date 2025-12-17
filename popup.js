console.log("This is a popup!");

/*
// using the npm installed version of KYBER
import kyber from crystals-kyber;

// generate a public key
let pk = kyber.KeyGen512();
// print it to console
console.log(pk); */

import { KyberNetworkProvider } from "@kybernetwork/kyber.js";
import { ethers } from "ethers"; // Assuming ethers.js is used for wallet management

const provider = new KyberNetworkProvider("https://ropsten-api.kyber.network"); // Connect to Ropsten testnet
const wallet = new ethers.Wallet(YOUR_PRIVATE_KEY, provider); // Replace YOUR_PRIVATE_KEY with your actual private key
const kyber = new KyberNetwork(provider, wallet);
console.log(wallet);
