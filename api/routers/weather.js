const express = require('express');
const weatherController = require('../controllers/weather');

const weatherRouter = express.Router();


weatherRouter.get('/:city(\\b[^\\d\\W]+\\b)', weatherController.getCityWeatherByName);
weatherRouter.get('/:zipcode(\\d+)', weatherController.getCityWeatherByZipCode);

module.exports = weatherRouter;
