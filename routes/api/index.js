'use strict'
const express = require('express');
const router = express.Router();

const auth = require('./auth.router');
const user = require('./user.router');

router.use('/auth', auth);
router.use('/user', user);

module.exports = router;