'use strict'
const Exam = require('../models/exam.model')

const repository = {
    async save(newExam) {
        let myExam = new Exam(newExam);
        return await myExam.save();
    },
    async findOne(query) {
        return await Exam.findOne(query);
    },
    async find(query) {
        return await Exam.find(query);
    },
    async update(id, data) {
        return await Exam.findOneAndUpdate(id, data, {new: true});
    }
};

module.exports = repository;
