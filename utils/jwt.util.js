'use strict';
const jwt = require('jwt-simple');
const moment = require('moment');
const params = require('./../params');

const generateToken = (user) => {
    var payload = {
        sub: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        // role: user.role,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    return jwt.encode(payload, params.secret);
}

module.exports = generateToken;
