'user strict'
const bcrypt = require('bcrypt');
const responseResult = require('../utils/response.util');
const httpStatusCodes = require('http-status-codes');
const userRepository = require('../repositories/user.repository')

const controller = {

    async save(req, res, next) {
        try {
            let body = req.body;

            const exists = await userRepository.existEmail(body.email);
            if(exists)
                return responseResult.error(res, httpStatusCodes.BAD_REQUEST,'User exist!');
            body.password = await bcrypt.hash(body.password, 10);
            const user = await userRepository.save(body);
            if (!user)
                return responseResult.error(res, httpStatusCodes.BAD_REQUEST,
                    'Solicitud incorrecta, revice los datos enviados.');

            return responseResult.general(res, httpStatusCodes.OK, { message: 'User created' });
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'No podemos procesar tu solicitud en este momento.', e);
        }

    }
};


module.exports = controller;
