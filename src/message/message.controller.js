const { Message } = require("../db");

 
async function getMessages(req, res) {
    try {
        const messages = await Message.findAll();  
        res.status(200).json({ data: messages });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch messages" });
    }
}

 
async function addMessage(req, res) {
    try {
        const { senderId, receiverId, content, chatRoomId } = req.body;

        const newMessage = await Message.create({
            senderId,
            receiverId,
            content,
            chatRoomId,
            timestamp: new Date()
        });

        res.status(200).json({
            message: "Message sent successfully",
            data: newMessage
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to send message" });
    }
}

module.exports = { getMessages, addMessage };
