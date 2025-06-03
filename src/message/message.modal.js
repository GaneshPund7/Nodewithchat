
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Message = sequelize.define('Message', {
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: true ,
    chatRoomId: {
        type: DataTypes.INTEGER,
        allowNull: true 
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}
}, {
    tableName: 'message',
    timestamps: false

});


module.exports = Message;
