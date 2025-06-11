const CheckPermission = require("../../src/checkPermission/checkPermission.modal");
const Message = require("../../src/message/message.modal");
const Permission = require("../../src/permission/permission.model");
const Role = require("../../src/role/role.modal");
const User = require("../../src/user/user.modal");

const models = { User, Message, CheckPermission, Permission ,Role}

Object.keys(models).forEach((modalName)=>{
    if(models[modalName].associate){
        models[modalName].associate(models)
    }
});
module.exports = models