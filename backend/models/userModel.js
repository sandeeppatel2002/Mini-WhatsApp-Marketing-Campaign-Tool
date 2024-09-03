const mongoose = require("mongoose");

//create Schema
const userSchema = new mongoose.Schema(
  {
    message_id: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    user_name: {
      type: "string",
      required: true,
    },
    mobile_number: {
      type: "string",
      required: true,
    },
    status: {
      type: "string",
      default: "Pending",
    },
  },
  { timestamps: true }
);

//create Model
const User = mongoose.model("User", userSchema);

module.exports = User;

// const mongoose = require("mongoose");

// // Create Schema for User
// const userSchema = new mongoose.Schema({
//   message_id: {
//     type: String,
//     required: true,
//   },
//   user_id: {
//     type: String,
//     required: true,
//   },
//   user_name: {
//     type: String,
//     required: true,
//   },
//   mobile_number: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     default: "Pending", // Default value for status is "Pending"
//   },
// });

// // Create a model using the schema
// const Users = mongoose.model("Users", userSchema);

// module.exports = Users;
