const express = require('express');
const examples = require('./examples');
const rootRouter = express.Router();

rootRouter.use('/example', examples);

module.exports = rootRouter;