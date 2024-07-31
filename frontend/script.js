document.addEventListener('DOMContentLoaded', () => {
  fetchTasks();
});

const fetchTasks = () => {
  fetch('http://localhost:3000/api/tasks')
    .then(response => response.json())
    .then(tasks => {
      tasks.forEach(task => addTaskToList(task));
    })
    .catch(error => {
      console.error('Erro ao buscar tarefas:', error);
    });
};

const addTaskToList = (task) => {
  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.dataset.id = task.id; 

  taskItem.innerHTML = `
    <div>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <span>Status: ${task.status}</span>
    </div>
    <div>
      <button class="edit-button" onclick="editTask(${task.id}, this)">Editar</button>
      <button onclick="removeTask(${task.id})">Remover</button>
    </div>
  `;
  taskList.appendChild(taskItem);
};


const editTask = (id, button) => {
  const taskItem = button.closest('.task-item');
  const title = taskItem.querySelector('h3').textContent;
  const description = taskItem.querySelector('p').textContent;
  const status = taskItem.querySelector('span').textContent.split(': ')[1];
  
  taskItem.innerHTML = `
    <div>
      <input type="text" id="edit-title" value="${title}" />
      <textarea id="edit-description">${description}</textarea>
      <select id="edit-status">
        <option value="pending" ${status === 'pending' ? 'selected' : ''}>Pending</option>
        <option value="completed" ${status === 'completed' ? 'selected' : ''}>Completed</option>
      </select>
    </div>
    <div>
      <button class="save-button" onclick="saveTask(${id}, this)">Salvar</button>
      <button class="cancel-button" onclick="fetchTasks()">Cancelar</button>
    </div>
  `;
};

const saveTask = (id, button) => {
  const taskItem = button.closest('.task-item');
  const title = taskItem.querySelector('#edit-title').value;
  const description = taskItem.querySelector('#edit-description').value;
  const status = taskItem.querySelector('#edit-status').value;

  fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, status })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao atualizar tarefa');
    }
    return response.json();
  })
  .then(task => {
    const taskItem = document.querySelector(`.task-item[data-id='${id}']`);
    taskItem.innerHTML = `
      <div>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <span>Status: ${task.status}</span>
      </div>
      <div>
        <button class="edit-button" onclick="editTask(${task.id}, this)">Editar</button>
        <button onclick="removeTask(${task.id})">Remover</button>
      </div>
    `;
  })
  .catch(error => {
    console.error('Erro ao atualizar tarefa:', error);
  });
};



const removeTask = (id) => {
  fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      if (response.status === 204) {
        const taskItem = document.querySelector(`.task-item[data-id='${id}']`);
        taskItem.remove();
      } else {
        return response.json();
      }
    } else {
      throw new Error('Erro ao remover tarefa');
    }
  })
  .catch(error => {
    console.error('Erro ao remover tarefa:', error);
  });
};



document.getElementById('task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  
  fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, status: 'pending' })
  })
  .then(response => response.json())
  .then(task => {
    addTaskToList(task);
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
  })
  .catch(error => {
    console.error('Erro ao adicionar tarefa:', error);
  });
});
