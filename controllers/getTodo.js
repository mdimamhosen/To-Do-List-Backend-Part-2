const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    // fetching all todo items from database
    const todo = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todo,
      message: "Entire todo data is fetched",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: {},
      message: "Error fetching todo data from",
    });
  }
};

exports.getTodoByid = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    // if data by this id is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Data by this id is not found",
      });
    }
    res.status(200).json({
      success: true,
      message: `Data by this ${id} is found`,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: {},
      message: "Error fetching todo data from",
    });
  }
};
