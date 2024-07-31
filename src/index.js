// index.js

const express = require('express');
const app = express();
const port = 3000; 
const connection = require('./config/db'); 
const cors = require('cors');

app.use(cors());
app.use(express.json()); 

// rota para adicionar uma nova tarefa
app.post('/api/tasks', (req, res) => {
  const { title, description, status } = req.body;
  connection.query('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, title, description, status });
  });
});

// rota para listar todas as tarefas
app.get('/api/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// rota para atualizar uma tarefa
app.put('/api/tasks/:id', (req, res) => {
  const { title, description, status } = req.body;
  const { id } = req.params;
  connection.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json({ id, title, description, status });
  });
});

// rota para remover uma tarefa
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM tasks WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(204).end(); 
  });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
