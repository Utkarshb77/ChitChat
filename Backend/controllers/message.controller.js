import Conversation from "../models/conversation.model.js";
import User from "../models/user_model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;

        const receiver = await User.findById(receiverId);
        if (!receiver) {
            return res.status(400).json({ error: "Receiver not found" });
        }

        const senderId = req.user._id; // current logged in user

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = await Message.create({
            sender: senderId,
            reciever: receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);
        return res.status(201).json({ success: true, message: "Message sent successfully", data: newMessage });

    } catch (error) {
        console.log("Error in Sending Message", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: charUserId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, charUserId] }
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json({ success: true, message: "No messages yet", data: [] });
        }

        return res.status(200).json({ success: true, message: "Messages fetched successfully", data: conversation.messages });
    } catch (error) {
        console.log("Error in Getting Messages", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};