const models = require("../../utils/db");
const { encPass } = require("../auth/middleware");
const salt = 10;
async function getUser(req, res) {
     const getUser = await models.User.findAll();
     res.status(200).json({ data: getUser })

     // Get User with role
} async function getUserwithrole(req, res) {
     const { id } = req.params
     try {
          const getUser = await models.User.findOne({
               where: { id: id },
               include: { model: models.Role }
          });
          res.status(200).json({ data: getUser })
     }catch(error){
          res.status(400).json({message :"User not found", error: error})
     }
}

async function addUser(req, res) {
     const { name, email, password} = req.body;
   try{
     
     const encpassword = await encPass(password, salt );

     const addUser = await models.User.create({ name, email, password: encpassword});
     res.status(200).json({ message: 'User added successfully', data: addUser })
   }
   catch(error){
     return res.status(404).json({message: "Somthing went wrong", error: error})
   }
}

module.exports = { getUser, addUser, getUserwithrole }