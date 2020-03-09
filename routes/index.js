const express = require('express');
const router = express.Router();

module.exports = (app) => {
    router.use('/v0', require('./v0')(app));
    return router;
};