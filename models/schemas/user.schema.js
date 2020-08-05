'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const { user } = require('./../../utils/schema.util');


const rolesValid = {
    values: [user.roles.admin, user.roles.applicant, user.roles.nurse],
    message: '{VALUE} not an allowed role'
};

const nursetypeValid = {
    values: [user.nurseType.carer, user.nurseType.nurse, user.nurseType.specialist],
    message: '{VALUE} not an allowed nurse type'
};

let UserSchema = new Schema({
    name: {type: String, required: [true, 'The name is required.']},
    firstname: {type: String, required: [true, 'The firstname is required.']},
    lastname: {type: String, required: [true, 'The lastname is required.']},
    telephone: {type: String, required: [true, 'The telephone is required.']},
    email: {type: String, unique: true, required: [true, 'The email is required.']},
    password: {type: String, required: [true, 'The password is required.']},
    role: [{
        name: {
            type: String,
            required: [true, 'The role is required.'],
            default: user.roles.applicant,
            enum: rolesValid,
        },
        create_at: {type: Date, required: [true, 'The create_at is required.'], default: Date.now},
    }],
    id_card: {type: Number, required: [true, 'The id_card is required.']},
    // nurse_type: {type: String, required: [true, 'The nurse_type is required.']},
    nurse_type: [{
        name: {
            type: String,
            required: [true, 'The role is required.'],
            default: user.roles.applicant,
            enum: nursetypeValid
        },
        create_at: {type: Date, required: [true, 'The create_at is required.'], default: Date.now},
    }],
    street: {type: String, required: [true, 'The street is required.']},
    no_ext: {type: Number, required: [true, 'The no_ext is required.']},
    no_int: {type: Number, required: [true, 'The no_int is required.']},
    colonia: {type: String, required: [true, 'The colonia is required.']},
    country: {type: String, required: [true, 'The country is required.']},
    state: {type: String, required: [true, 'The state is required.']},
    township: {type: String, required: [true, 'The township is required.']},
    postal: {type: Number, required: [true, 'The postal is required.']},
    cellphone: {type: String, required: [true, 'The cellphone is required.']},
    city: {type: String, required: [true, 'The city is required.']},
    active: {type: Boolean, required: [true, 'The active is required.'], default: 1},
    create_at: {type: Date, required: [true, 'The create_at is required.'], default: Date.now},
    update_at: {type: Date, required: [true, 'The update_at is required.'], default: Date.now}
});

UserSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser único'});

module.exports = UserSchema;