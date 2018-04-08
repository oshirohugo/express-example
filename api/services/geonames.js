const got = require('got');
const config = require('config');

const GEONAMES_HOST = config.get('geonames.host');
const USERNAME = config.get('geonames.username');

module.exports = {

  /**
   * Get coordinates based on zip code calling Geo Names API
   * @param {string} zipCode
   */
  async getCoordinates(zipCode) {
    const path = `${GEONAMES_HOST}/postalCodeLookupJSON?postalcode=${zipCode}&country=US&username=${USERNAME}`;
    const response = await got.get(path, { protocol: 'http:' });
    const { lat, lng } = JSON.parse(response.body).postalcodes[0];
    return { lat, lng };
  },
};
