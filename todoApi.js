const http = require('http');

let todos = [];
let id = 1;

const server = http.createServer((req, res) => {
  if (req.url === '/todos' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos));
  }

  else if (req.url === '/todos' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const todo = JSON.parse(body);
      todo.id = id++;
      todos.push(todo);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(todo));
    });
  }

  else if (req.method === 'PUT') {
    const todoId = parseInt(req.url.split('/')[2]);
    let body = '';

    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const updatedTodo = JSON.parse(body);
      todos = todos.map(todo =>
        todo.id === todoId ? { ...todo, ...updatedTodo } : todo
      );

      res.end('Todo updated');
    });
  }

  else if (req.method === 'DELETE') {
    const todoId = parseInt(req.url.split('/')[2]);
    todos = todos.filter(todo => todo.id !== todoId);

    res.end('Todo deleted');
  }

  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('TODO API running on port 3000');
});
