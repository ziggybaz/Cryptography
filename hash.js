const { createHash } = require('crypto');

//creating a string hash.
function hash(input) {
  return createHash('sha256').update(input).digest('hex');
}
let password = 'douche bag';
const hash1 = hash(password);
console.log(hash1);
