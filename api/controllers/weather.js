const httpStatus = require('http-status-codes');

const logger = require('../helpers/logger');
const weatherService = require('../services/weather');

module.exports = {
  async getCityWeatherByName(req, res) {
    const { city } = req.params;
    logger.info(`Getting ${city} weather`);
    try {
      const weatherData = await weatherService.getWeatherByCityName(city);

      res.status(httpStatus.OK).send(weatherData);
    } catch (error) {
      logger.warn(`Error getting weather by city name. Reason: ${error}`);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  },

  async getCityWeatherByZipCode(req, res) {
    const { zipcode } = req.params;
    logger.info(`Getting ${zipcode} weather`);
    try {
      const weatherData = await weatherService.getWeatherByZipCode(zipcode);

      res.status(httpStatus.OK).send(weatherData);
    } catch (error) {
      logger.warn(`Error getting weather by zipcode. Reason: ${error}`);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  },

};
