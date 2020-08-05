'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const { user } = require('./../../utils/schema.util');

const nursetypeValid = {
    values: [user.nurseType.carer, user.nurseType.nurse, user.nurseType.specialist],
    message: '{VALUE} not an allowed nurse type'
};


let ExamSchema = new Schema({
    name: {type: String, required: [true, 'El nombre es requerido.']},
    description: {type: String, required: [true, 'La descripción es requerido.']},
    questions: [{
        question: {
            type: String,
            required: [true, 'La pregunta es requerido.']
        },
        answers:[{
            value: {
                type: String,
                required: [true, 'The value for answers is required.']
            },
            correct: {
                type: Boolean,
                required: [true, 'The option is correct for anwers is required.'],
                default: false
            }
        }]
     }],
    // nurse: {type: String, required: [true, 'The nurse is required.']},
    nurse_type: {
            type: String,
            required: [true, 'El tipo de enfermero es requerido.'],
            default: user.roles.applicant,
            enum: nursetypeValid
         },
    correct_answers: {type: Number, required: [false, 'The correct_answers is required.']},
    exam_state: {type: Boolean, required: [false, 'The exam_state is required.']},
    active: {type: Boolean, required: [true, 'The active is required.'], default: true},
    create_at: {type: Date, required: [true, 'The create_at is required.'], default: Date.now},
    update_at: {type: Date, required: [true, 'The update_at is required.'], default: Date.now}
});

ExamSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser único'});

module.exports = ExamSchema;