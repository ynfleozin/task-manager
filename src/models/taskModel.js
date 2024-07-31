const db = require('../config/db');

// Função para buscar todas as tarefas
const getTasks = (callback) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

// Função para criar uma nova tarefa
const createTask = (task, callback) => {
  db.query('INSERT INTO tasks SET ?', task, (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

// Função para atualizar uma tarefa pelo ID
const updateTask = (id, task, callback) => {
  db.query('UPDATE tasks SET ? WHERE id = ?', [task, id], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

// Função para deletar uma tarefa pelo ID
const deleteTask = (id, callback) => {
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
