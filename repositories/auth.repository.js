'use strict'
const User = require('../models/user.model')

const repository = {
    async singIn(email) {
        return await User.findOne({email: email});
    }
};

module.exports = repository;
