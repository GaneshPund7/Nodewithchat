
const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db/db');
// const sequelize = require('../db/db');

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

Message.sync({alter: true})
module.exports = Message;
