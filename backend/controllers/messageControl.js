const Conversation=require("../models/conversationModel.js");
const Message=require("../models/message.js");
const { getrecieverSocketId } = require("../socketIo/server.js");
const { io }=require("../socketIo/server.js")
module.exports.getmessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;
       
        console.log(message, recieverId, senderId);

        let conversation = await Conversation.findOne({
            members: {
                $all: [senderId, recieverId]
            }
        });
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, recieverId]
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        const receiversocketId=getrecieverSocketId(recieverId);
        if(receiversocketId){
            io.to(receiversocketId).emit("newMessage",newMessage);
        }
        await Promise.all([newMessage.save(), conversation.save()]);
        res.status(201).json(newMessage);  
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports.Sendmessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // Find conversation between sender and receiver
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        }).populate("messages");

        if (!conversation) {
            // Return an empty array if no conversation is found
            return res.status(200).json([]);
        }

        // Respond with conversation messages
        return res.status(200).json(conversation.messages);
    } catch (error) {
        console.error("Error in Sendmessage:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
