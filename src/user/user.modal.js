const {DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const User = sequelize.define('User',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
      email: {
        type: DataTypes.STRING,
        allowNull: false
    },
      password: {
        type: DataTypes.STRING,
        allowNull: false
    },
      RoleId: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'user',
    timestamps: false
});

// User.associate = (models)=>{
//    User.belongsToMany(models.Role, { through: 'Permission', foreignKey:"UserId", primaryKey:"UserId"});
// }
module.exports = User