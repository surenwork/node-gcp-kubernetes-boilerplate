import express from 'express';
import { core } from './config';

const coreConfig = require
const app = express();

app.get('/', (req, res) => {
  res.send('Hi There!!, Welcome to node microservice boilerplate');
});

const PORT = core.APP_PORT;
app.listen(PORT);
console.log('Listning to port ', PORT);
