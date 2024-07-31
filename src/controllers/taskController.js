const taskModel = require('../models/taskModel');

const getTasks = (req, res) => {
  taskModel.getTasks((tasks) => {
    res.json(tasks);
  });
};

const createTask = (req, res) => {
  const newTask = req.body;
  taskModel.createTask(newTask, (result) => {
    res.json({ id: result.insertId, ...newTask });
  });
};

module.exports = { getTasks, createTask };
