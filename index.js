import express from 'express';
import { core, appInit, healthcheckHandler } from './config';

const app = express();

app.get('/', healthcheckHandler);
app.get('/healthcheck', healthcheckHandler);

app.get('/greeting', (req, res) => {
  res.send({ message: 'Hi There!!, Welcome to node microservice boilerplate' });
});

appInit(app, core);
