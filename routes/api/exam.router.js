'use strict'
const express = require('express');
const router = express.Router();

const ftnValidator = require('../../validators/function.validator');
// const schemas = require('../../validators/exam.validator');
const examController = require('../../controllers/exam.controller')

router.post('/', examController.save);
router.get('/', examController.find);
router.get('/:id', examController.findById);
router.put('/:id', examController.update);
router.delete('/:id', examController.remove);
router.post('/:id/question', examController.questionSave);

module.exports = router;