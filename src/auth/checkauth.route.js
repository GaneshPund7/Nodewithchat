const express = require('express');
const { userLogin } = require('./checkauth');

const sign = express.Router();

sign.post('/', userLogin);
module.exports = sign;