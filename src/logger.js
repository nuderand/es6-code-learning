import winston from 'winston';
import path from 'path';
import fs from 'fs';

const filename = path.join(__dirname, 'development.log');

const logger = new (winston.Logger) ({
  transports: [
    new (winston.transports.Console)({
      colorize: 'all',
      // json: true,
      // raw: true
    }),
    new (winston.transports.File)({
      filename: filename
    })
  ]
});

export default logger;
