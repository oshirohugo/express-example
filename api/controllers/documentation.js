const httpStatus = require('http-status-codes');

const logger = require('../helpers/logger');
const documentation = require('../../docs/swagger.json');

module.exports = {
  async getDocumentation(req, res) {
    logger.info('Getting documentation');
    try {
      res.status(httpStatus.OK).json(documentation);
    } catch (error) {
      logger.warn(`Error getting documentation. Reason: ${error}`);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  },

};
