'use strict'
const express = require('express');
const router = express.Router();

const authController = require('../../controllers/auth.controller')

router.post('/login',  authController.singIn);

module.exports = router;