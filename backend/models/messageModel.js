const mongoose = require("mongoose");

// Create Schema for Message
const messageModel = new mongoose.Schema(
  {
    message_id: {
      type: Number,
      required: true,
      unique: true,
    },
    message_name: {
      type: String,
      required: true,
    },
    message_data: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Optionally add createdAt and updatedAt timestamps
  }
);

// Create a model using the schema
const Message = mongoose.model("Message", messageModel);

module.exports = Message;
