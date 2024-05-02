// Import mongoose library
const mongoose = require("mongoose");

// Define the schema for the todo collection
const todoSchema = new mongoose.Schema({
  // Title of the todo item
  title: {
    type: "string", // Specify the data type as string
    required: true, // Make it a required field
    maxLength: 50, // Limit the maximum length of the title
  },
  // Description of the todo item
  description: {
    type: "string", // Specify the data type as string
    required: true, // Make it a required field
    maxLength: 50, // Limit the maximum length of the description
  },
  // Date when the todo item was created
  date: {
    type: Date, // Specify the data type as Date
    required: true, // Make it a required field
    default: new Date(), // Set the default value to the current date and time
  },
  // Date when the todo item was last updated
  updatedAt: {
    type: Date, // Specify the data type as Date
    required: true, // Make it a required field
    default: new Date(), // Set the default value to the current date and time
  },
});

// Export the Todo model based on the schema
module.exports = mongoose.model("Todo", todoSchema);
