const winston = require('winston');
const config = require('config');

const transports = [];

if (!process.env.NODE_ENV) {
  if (!process.env.MOCHA_TEST) {
    // Console Transport only for local development and not for Mocha tests
    const timestampFormat = () => new Date().toISOString();

    transports.push(new (winston.transports.Console)({
      colorize: true,
      timestamp: timestampFormat,
      level: config.get('logger.level'),
    }));
  }
}

const logger = new winston.Logger({
  transports,
});

module.exports = logger;
