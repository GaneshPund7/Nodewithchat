const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function createToken (payload, seckretkey){
const token = jwt.sign(payload, seckretkey, { expiresIn: '500ms'})
return token;
}

function encPass(password,salt){
const encPassword = bcrypt.hash(password,salt);
return encPassword;
}

function decPass(password, salt){
    const decPassword = bcrypt.compare(password, salt);
    return decPassword;
}
 module.exports = { encPass, decPass, createToken, }