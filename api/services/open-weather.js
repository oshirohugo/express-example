const got = require('got');
const config = require('config');

const API_KEY = config.get('open-weather.api-key');
const UNITS_SYSTEM = config.get('open-weather.unit-system');
const OPEN_WEATHER_HOST = config.get('open-weather.host');

module.exports = {

  /**
   * Get weather based on city name calling Open Weather API
   * @param {string} cityName
   */
  async getWeatherByCityName(cityName) {
    const path = `${OPEN_WEATHER_HOST}/data/2.5/forecast?APPID=${API_KEY}&units=${UNITS_SYSTEM}&q=${cityName},us`;
    const response = await got.get(path, { protocol: 'http:' });
    return response.body;
  },

  /**
   * Get weather based on geographic coordinates Open Weather API
   * @param {number} lat
   * @param {number} lon
   */
  async getWeatherByCoordinates(lat, lon) {
    const path = `${OPEN_WEATHER_HOST}/data/2.5/forecast?APPID=${API_KEY}&units=${UNITS_SYSTEM}&lat=${lat}&lon=${lon}`;
    const response = await got.get(path, { protocol: 'http:' });
    return response.body;
  },
};
