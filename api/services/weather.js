const geonamesService = require('./geonames');
const openWeatherService = require('./open-weather');

module.exports = {
  /**
   * Get weather based on city name
   * @param {string} cityName
   */
  getWeatherByCityName(cityName) {
    return openWeatherService.getWeatherByCityName(cityName);
  },

  /**
   * Get weather based on zipCode
   * @param {string} zipCode
   */
  async getWeatherByZipCode(zipCode) {
    const { lat, lng } = await geonamesService.getCoordinates(zipCode);
    return openWeatherService.getWeatherByCoordinates(lat, lng);
  },
};
