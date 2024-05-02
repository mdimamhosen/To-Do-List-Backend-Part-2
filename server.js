const express = require("express");
const app = express();
require("dotenv").config();
app.listen(process.env.PORT, () => {
  console.log(`Server started at port number ${process.env.PORT}`);
});

// middlewere to parse json request body
app.use(express.json());
// import routes form TODO API

const todoRoutes = require("./routes/todos");
// mount or add or append the todo API routes
app.use("/api/v1", todoRoutes);

// connecting with database
const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>This Is Home Page</h1>`);
});
