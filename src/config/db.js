const mysql = require('mysql2');  

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Leonardo543',
  database: 'task_manager'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados.');
});

module.exports = connection;
