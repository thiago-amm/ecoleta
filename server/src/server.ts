import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());

// Middleware que deserializa os dados recebidos em formato JSON.
app.use(express.json());

app.use(routes);

// Middleware que serve os arquivos estáticos da aplicação.
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
