const express = require('express');
const { addMessage, getMessages } = require('./message.controller');
const message = express.Router();

message.get('/', getMessages);
message.post('/', addMessage);

module.exports = message;
