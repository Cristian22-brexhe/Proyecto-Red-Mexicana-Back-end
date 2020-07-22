'use strict'
const User = require('../models/user.model')

const repository = {
    async save(newUser) {
        let myUser = new User(newUser);
        return await myUser.save();
    },
    async existEmail(email) {
        return await User.findOne({email: email});
    }
};

module.exports = repository;
