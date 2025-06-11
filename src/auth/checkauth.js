const models = require("../../utils/db");
const { decPass, createToken } = require("./middleware");

const seckretkey = "Ramraj";
let salt = 10;
async function userLogin(req, res){
 const { email, password } =req.body;
 const payload = { email, password };

try{

    const getUser = await models.User.findOne({
        where: { email }
    })
    console.log("my User  ",getUser)
   if(!getUser){
     res.status(400),send("User Not found");
   }
   const encriptPass = getUser.password;


   const password = await decPass(password,encriptPass);
 console.log(password)
   if(!password){
    return  res.status(401).json({message:"Password is wrong"})
   }

   const token = await createToken(payload, seckretkey);
   res.status(200).json({message : "User login successfuly", token : token})

}catch ( error){
    res.status(404).json({message:"Somthing went wrong", error: error})}
}

module.exports = { userLogin } 