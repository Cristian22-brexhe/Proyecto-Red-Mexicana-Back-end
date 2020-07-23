const Joi = require('@hapi/joi');

const schemas = {
    POST: {
        body: Joi.object({
            email: Joi.string().required().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{1,10}$/),
            password: Joi.string().required().min(6)
        }),
    },
};

module.exports = schemas;
