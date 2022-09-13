const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');
const { isIPv6 } = require('net');

//cipher.
const message = `kinjekitile ngwale`;
const key = randomBytes(32);
const iv = randomBytes(16);
const cipher = createCipheriv('aes256', key, iv);

//encrypt.
const encryptedMessage =
  cipher.update(message, 'utf8', 'hex') + cipher.final('hex');

//decipher.
const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8');
console.log(
  `Encrypted:${encryptedMessage}\nDeciphered:${decryptedMessage.toString(
    'utf8'
  )}`
);
