const express = require('express');
const { addUser, getUser, getUserwithrole } = require('./user.controller');
const user = express.Router();

user.get('/', getUser);
user.post('/', addUser);
user.get('/roleuser/:id',getUserwithrole);

module.exports = user