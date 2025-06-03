// const models = require("../db");

const { User } = require("../db");

async function getUser(req, res){
     const getUser = await User.findAll();
     res.status(200),json({data: getUser})
}

async function addUser(req, res){
     const { name, email, password } = req.body;
     
     const addUser = await  User.create({ name, email, password });
     res.status(200).json({message: 'User added successfully', dada: addUser})
}

module.exports = { getUser, addUser}