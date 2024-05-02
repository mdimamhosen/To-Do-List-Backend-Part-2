// Import the mongoose library
const mongoose = require("mongoose");

// Import dotenv for accessing environment variables
require("dotenv").config();

// Function to connect to the MongoDB database
const dbConnect = () => {
  // Use mongoose to connect to the MongoDB database using the DATABASE_URL from environment variables
  mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(() => {
      // Log a success message if the connection is successful
      console.log("Connected to the database");
    })
    .catch((err) => {
      // Log an error message if there's an error connecting to the database
      console.error("Error connecting to the database:");
      console.error(err); // Log the actual error for debugging purposes
      process.exit(1); // Exit the Node.js process with a non-zero exit code to indicate failure
    });
};

// Export the dbConnect function to be used in other parts of the application
module.exports = dbConnect;
