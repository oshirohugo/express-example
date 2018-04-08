const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./api/helpers/logger');
const weatherRouter = require('./api/routers/weather');

const LISTEN_PORT = require('config').get('port');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/weather', weatherRouter);


const server = app.listen(LISTEN_PORT, () => {
  logger.info(`Server started on port ${LISTEN_PORT}`);
});

module.exports = server;
