const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db/db'); 
// const sequelize = require('../db/db');

const Permission = sequelize.define('Permission',{
    PermissionId: {
        type: DataTypes.STRING,
        allowNull: false
    },
      RoleId: {
        type: DataTypes.STRING,
        allowNull: false
    },
       
}, {
    tableName: 'permission',
    timestamps: false
});

Permission.associate = (models)=>{
   Permission.belongsToMany(models.Role, { through: 'checkPermission', foreignKey:"CheckpermissionId", primaryKey:"PermissionId"});
}
Permission.sync({ alter:true })
module.exports = Permission