'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let HistoryServiceSchema = new Schema({
    name: {type: String, required: [true, 'The name is required.']},
    date_service: {type: Date, required: [true, 'The date service is required.'], default: Date.now},
    type_service: {type: String, required: [true, 'The type service is required.']},
    rating: [{
        value: {
            type: String,
            required: [true, 'The rating is required.']
        }
    }],
    notes: [{value: String, required: [false, 'The notes is required.']}],
    active: {type: Boolean, required: [true, 'The active is required.'], default: true},
    create_at: {type: Date, required: [true, 'The create_at is required.'], default: Date.now},
    update_at: {type: Date, required: [true, 'The update_at is required.'], default: Date.now}

});

HistoryServiceSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser único'});

module.exports = HistoryServiceSchema;