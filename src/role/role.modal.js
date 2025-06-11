const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db/db'); 
// const sequelize = require('../db/db');

const Role = sequelize.define('Role',{
    roleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
      description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
}, {
    tableName: 'role',
    timestamps: false
});

Role.associate = (models)=>{
   Role.hasOne(models.User, { primaryKey:"RoleId"});
   Role.belongsToMany(models.Permission, { through: 'checkPermission', foreignKey:"CheckpermissionId"});
}
Role.sync({alter:true})
module.exports = Role