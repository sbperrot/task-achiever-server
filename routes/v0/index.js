const express = require('express');
const router = express.Router();

const test = require('./test.route');

module.exports = (app) => {
    router.use('/test', test);
    return router;
};