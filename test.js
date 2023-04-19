// SOOZEOULKPNGMFICNX4BQOA6SFJISAT5BF4OVDDA6LZUU2NWB43A====

const clientId = "abc";
const clientSecret = "def";

const urlEncodedClientId = encodeURIComponent(clientId);
const urlEncodedClientSecret = encodeURIComponent(clientSecret);

const base64Encoded = btoa(urlEncodedClientId + ":" + urlEncodedClientSecret);
console.log("Encoded Client ID:");
console.log(urlEncodedClientId);
console.log("Encoded Client Secret:");
console.log(urlEncodedClientSecret);
console.log("Base 64 encoded Header:");
console.log("Basic " + base64Encoded);
