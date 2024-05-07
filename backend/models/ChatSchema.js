import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    user: {type: String, required: true},
    content: {type: String, required: true},
})

export const Chat = mongoose.model('Chat', chatSchema)