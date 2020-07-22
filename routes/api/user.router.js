'use strict'
const express = require('express');
const router = express.Router();

const ftnValidator = require('../../validators/function.validator');
const schemas = require('../../validators/user.validator');
const userController = require('../../controllers/user.controller')

router.post('/', ftnValidator(schemas.POST), userController.save);

module.exports = router;