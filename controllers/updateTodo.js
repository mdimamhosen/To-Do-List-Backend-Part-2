const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title: title, description: description, updatedAt: new Date() }
    );
    const updatedTodo = await Todo.findById({ _id: id });
    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: "Updated Todo successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: {},
      message: "Failed to update Todo successfully",
    });
  }
};
