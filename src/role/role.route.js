const express = require('express');
const { getRole, addRole } = require('./role.controller');
const role = express.Router();

role.get('/', getRole);
role.post('/', addRole);

module.exports = role