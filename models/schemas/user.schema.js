'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let UserSchema = new Schema({
    firstname: {type: String, required: [true, 'The firstname is required.']},
    lastname: {type: String, required: [true, 'The lastname is required.']},
    email: {type: String, unique: true, required: [true, 'The email is required.']},
    password: {type: String, required: [true, 'The password is required.']}
});

UserSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser único'});

module.exports = UserSchema;