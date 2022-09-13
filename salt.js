const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function signUp(email, password) {
  const salt = randomBytes(16).toString('hex');
  const hashedPassword = scryptSync(password, salt, 64).toString('hex');
  const user = { email, password: `${salt}:${hashedPassword}` };
  users.push(user);
  return user;
}
function logIn(email, password) {
  const user = users.find((el) => el.email === email);
  const [salt, key] = user.password.split(':');
  const hashedBuffer = scryptSync(password, salt, 64);
  const keyBuffer = Buffer.from(key, 'hex');
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    return 'login success';
  } else {
    return 'login fail';
  }
}
