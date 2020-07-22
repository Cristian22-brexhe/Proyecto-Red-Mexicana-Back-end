'use strict';

const mongoose = require('./db'),

Schema = mongoose.Schema;

const schemas = {

    userSchema: new Schema({
        firstname: {type: String},
        lastname: {type: String},
        email: {type: String},
        password: {type: String}
    })

};


module.exports = schemas;