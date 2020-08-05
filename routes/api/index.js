'use strict'
const express = require('express');
const router = express.Router();

const auth = require('./auth.router');
const user = require('./user.router');
const exam = require('./exam.router');

router.use('/auth', auth);
router.use('/user', user);
router.use('/exam', exam);

module.exports = router;