import express from 'express';
import util from 'util';
import path from 'path';
import logger from './../logger';
import config from './../yaml';

const app = express();

const users = [
  { name: 'tobi' },
  { name: 'loki' },
  { name: 'jane' }
];

app.use('/api/users', function (req, res, next) {
  res.send(users);
  console.log(res._header);
  console.log(res.statusCode);
  console.log(res.statusMessage);
  logger.error(res.statusCode);
});

app.listen(3000);

logger.info('logger module is executing');

util.log('Express server is running');
