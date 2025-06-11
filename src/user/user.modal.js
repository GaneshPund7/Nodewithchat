const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db/db'); 

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
    tableName: 'users',
    timestamps: false
});

User.associate = (models)=>{

   User.belongsTo(models.Role, { foreignKey:"RoleId"});
}
User.sync({alter:true})
module.exports = User