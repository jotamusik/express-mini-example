const express = require('express');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { authenticate } = require("./middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware -> Funcion por la que pasa nuestra petición
app.use((request, response, next) => {
  console.info(`${request.method} ${request.url}`);
  next();
});

app.use('/users', authenticate, usersRouter);
app.use('/', indexRouter);

app.use((error, req, res, next) => {
  console.error('Error -> ', error.message);
  if (error.message === 'Unauthorized') return res.status(401).send({ error: 'Unauthorized' });
  if (error.message === 'Bad request') return res.status(400).send({ error: 'Bad request' });
  if (error.message === 'DomainError') return res.status(500).send({ error: 'Domain violation error' });
});

module.exports = app;
