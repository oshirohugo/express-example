const express = require('express');
const documentationController = require('../controllers/documentation');

const documentationRouter = express.Router();


documentationRouter.get('', documentationController.getDocumentation);

module.exports = documentationRouter;
