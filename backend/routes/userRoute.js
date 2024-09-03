const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const Message = require("../models/messageModel");
const router = express.Router();

// Mock function to send WhatsApp messages
async function sendWhatshapMessage(mobile_number) {
  // Here you would call the WhatsApp API with the mobile_number
  // This function should return a boolean or a status
  console.log(`Sending WhatsApp message to ${mobile_number}`);
  return true; // Simulate successful message sending
}

// Route to create a new campaign
router.post("/newCampaign", async (req, res) => {
  console.log(req.body);
  const { name, message, csvData } = req.body;

  try {
    // Find the largest message_id and increment it
    const lastMessage = await Message.findOne().sort({ message_id: -1 }).exec();
    const newMessageId = (lastMessage ? lastMessage.message_id : 0) + 1;

    // Create a new message
    const messageAdded = await Message.create({
      message_id: newMessageId,
      message_name: name,
      message_data: message,
    });

    // Create users and send WhatsApp messages
    for (const user of csvData) {
      try {
        // Create a new user
        const userId = parseInt(user.user_id, 10);
        await User.create({
          message_id: newMessageId,
          user_id: userId,
          user_name: user.user_name,
          mobile_number: user.mobile_number,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
      }
    }

    // Send WhatsApp messages and update user status
    for (const user of csvData) {
      try {
        const success = await sendWhatshapMessage(user.mobile_number);
        if (success) {
          // Update user status to "Successful"
          await User.updateOne(
            { message_id: newMessageId, user_id: user.user_id },
            { $set: { status: "Successful" } }
          );
          console.log("successfull");
        }
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
      }
    }

    res
      .status(201)
      .json({ message: "Campaign created successfully", data: messageAdded });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Example route for testing WhatsApp API endpoint
router.post("/whatshapAPI", async (req, res) => {
  res.status(200).json({ data: "success" });
});

// Route to get the list of all users
router.get("/messageList", async (req, res) => {
  try {
    const allMessage = await Message.find();
    console.log(allMessage);
    res.status(200).json({ data: allMessage });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Route to get user details by ID
router.get("/userList/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    // id = parseInt(id, 10);
    const userData = await User.find({ message_id: id });
    console.log(userData);
    res.status(200).json({ data: userData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
