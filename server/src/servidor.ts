import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

const users = [
  'Thiago',
  'Polyany',
  'Lorenzo'
];

/*
app.get('/users', (request, response) => {
  return response.json([
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
  ]);
});
*/

app.get('/users', (request, response) => {
  const search = String(request.query.search).toLowerCase();
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
  return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});

app.post('/users', (request, response) => {
  const data = request.body;
  const user = {
    "name": data.name,
    "email": data.email
  };
  return response.json(user);
});

app.listen(3333);