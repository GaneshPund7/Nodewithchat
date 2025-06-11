const models = require("../../utils/db");

async function getRole(req, res){
     const getRole = await models.Role.findAll();
     res.status(200).json({data: getRole})
}

async function addRole(req, res){
     const { roleName, description } = req.body;    
 try{
        const addRole = await  models.Role.create({ roleName, description });
     res.status(200).json({message: 'Role added successfully', dada: addRole})
 }catch(error){
    res.status(404).json({message: "Somthing went wrong", error: error})
 }
}

module.exports = { getRole, addRole }