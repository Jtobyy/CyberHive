//this file is logging middleware
const logger = require('./../utils/logger.util');

module.exports = function(req, res, next) {
    logger.info(`${req.method} ${req.url}`);
    next();
}