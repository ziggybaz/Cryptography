const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypairs');

//encryption.
const message = 'slavery opened up the world';
const encryptedData = publicEncrypt(publicKey, Buffer.from(message));
console.log(encryptedData.toString('hex'));

//decryption.
const decryptedData = privateDecrypt(privateKey, encryptedData);
console.log(decryptedData.toString('utf-8'));
