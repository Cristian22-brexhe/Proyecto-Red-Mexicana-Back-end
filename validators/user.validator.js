const Joi = require('@hapi/joi');

const schemas = {
    POST: {
        body: Joi.object({
            firstname: Joi.string().required().min(2),
            lastname: Joi.string().required().min(2),
            email: Joi.string().required().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{1,10}$/),
            password: Joi.string().required().min(6)
        }),
    },
};

module.exports = schemas;
