const { DataTypes } = require("sequelize");
const sequelize = require("../../utils/db/db");


const CheckPermission = sequelize.define('CheckPermission', {
    PermssionId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    RoleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'checkPermission',
    timestamps: false
});
CheckPermission.associate = (models)=>{
    CheckPermission.belongsTo(models.Permission)
    CheckPermission.belongsTo(models.Role)
}
CheckPermission.sync({alter: true})
 module.exports = CheckPermission

