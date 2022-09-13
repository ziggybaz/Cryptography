const { generateKeyPairSync } = require('crypto');
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, //the length of your key in bits.
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});
console.log(publicKey);
console.log(privateKey);
module.exports = { privateKey, publicKey };
