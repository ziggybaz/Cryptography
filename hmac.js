const { createHmac } = require('crypto');

const key = 'supersecretHMACkey';
const message = 'Just learning how to use hmac cyrptography';

const hmac = createHmac('sha256', key).update(message).digest('base64url');

console.log(hmac);

const key2 = 'azimiolaumoja';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');
console.log(hmac2);
