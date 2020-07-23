'use strict'
const express = require('express');
const router = express.Router();

const ping = require('./ping.router');
// const auth = require('./auth');

router.use('/ping', ping);

module.exports = router;