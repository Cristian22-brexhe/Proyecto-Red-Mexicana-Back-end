'user required'
const mongoose = require('mongoose');
const ExamSchema =  require('./schemas/exam.schema')

const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;
