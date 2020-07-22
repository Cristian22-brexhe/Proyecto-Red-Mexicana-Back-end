'user strict'
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt.util');
const responseResult = require('../utils/response.util');
const httpStatusCodes = require('http-status-codes');
const authRepository = require('../repositories/auth.repository')

const controller = {

    async singIn(req, res, next) {
        try {
            const body = req.body;
            const token = body.token;
            const user = await authRepository.singIn(body.email)

            if (!user)
                return responseResult.error(res, httpStatusCodes.BAD_REQUEST,
                    'Solicitud incorrecta, revice los datos enviados.');

            const passCompared = await bcrypt.compare(body.password, user.password);

            if(!passCompared)
                return responseResult.error(res, httpStatusCodes.FORBIDDEN,
                    'Email or password does not mastch!.');

            // if(token)
                return responseResult.general(res, httpStatusCodes.OK, {'token':  jwt(user)});
            //  else {
            //    user.password = ':)';
            //    return responseResult.general(res, httpStatusCodes.OK, user);
            // }

         } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'No podemos procesar tu solicitud en este momento.', e);
        }

    }
}
module.exports = controller;