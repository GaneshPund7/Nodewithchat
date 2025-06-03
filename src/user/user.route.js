const express = require('express');
const { addUser, getUser } = require('./user.controller');
const user = express.Router();

user.get('/', getUser);
user.post('/', addUser);

module.exports = user