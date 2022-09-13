const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypairs');

const message = 'this data must be signed';

//sign.
const signer = createSign('rsa-sha256');
signer.update(message);
const signature = signer.sign(privateKey, 'hex');

//verify.
const verifier = createVerify('rsa-sha256');
verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');
