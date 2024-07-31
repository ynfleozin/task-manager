# Task Manager

Um projeto de gerenciamento de tarefas que permite adicionar, listar, atualizar e remover tarefas. O backend é desenvolvido com Node.js e Express, enquanto o frontend é feito com HTML, CSS e JavaScript puro.

## Funcionalidades

- **Adicionar Tarefas:** Adicione novas tarefas com título e descrição.
- **Listar Tarefas:** Visualize todas as tarefas existentes.
- **Atualizar Tarefas:** Edite o título, descrição e status das tarefas.
- **Remover Tarefas:** Exclua tarefas indesejadas.

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Banco de Dados:** MySQL

## Instalação e Execução

### Requisitos

- Node.js
- MySQL

### Backend

1. Clone o repositório:

    ```bash
    git clone https://github.com/ynfleozin/task-manager.git
    ```

2. Navegue até o diretório do backend:

    ```bash
    cd task-manager
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure o banco de dados:

   - Crie um banco de dados MySQL e importe o esquema necessário para a tabela `tasks`.

5. Inicie o servidor:

    ```bash
    node index.js
    ```

   O servidor estará disponível em `http://localhost:3000`.

### Frontend

1. Navegue até o diretório do frontend (se estiver separado):

    ```bash
    cd frontend
    ```

2. Abra o arquivo `index.html` com Live Server ou em um servidor local para visualizar o frontend.

## Endpoints da API

- **GET** `/api/tasks` - Lista todas as tarefas.
- **POST** `/api/tasks` - Adiciona uma nova tarefa.
- **PUT** `/api/tasks/:id` - Atualiza uma tarefa existente.
- **DELETE** `/api/tasks/:id` - Remove uma tarefa existente.

## Estrutura do Projeto

- **`index.js`**: Arquivo principal do servidor Node.js.
- **`/config/db.js`**: Configuração de conexão com o banco de dados.
- **`/public`**: Diretório com arquivos estáticos (HTML, CSS, JS).
- **`/public/index.html`**: Página principal do frontend.
- **`/public/style.css`**: Estilos CSS.
- **`/public/script.js`**: Código JavaScript do frontend.

## Como Contribuir

1. Fork o repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/MinhaFeature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona uma nova feature'`).
4. Envie para o branch (`git push origin feature/MinhaFeature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- **Email:** leonardoalvarengam@gmail.com
- **GitHub:** [ynfleozin](https://github.com/ynfleozin)

