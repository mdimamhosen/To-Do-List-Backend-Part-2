// Import the Todo model
const Todo = require("../models/Todo");

// Define route handler for creating a new todo
exports.createTodo = async function (req, res) {
  try {
    // Extract title and description from request body
    const { title, description } = req.body;

    // Create a new Todo object and insert it into the database
    const response = await Todo.create({
      title: title,
      description: description,
    });

    // Send a JSON response indicating success
    res.status(200).json({
      success: true,
      data: response, // Include the created todo in the response data
      message: "Entry created successfully!", // Provide a success message
    });
  } catch (error) {
    // Log any errors to the console
    console.error(error);

    // Send a JSON response indicating failure
    res.status(500).json({
      success: false,
      data: "Internal server error", // Indicate the nature of the error
      message: "Internal error!", // Provide an error message
    });
  }
};
