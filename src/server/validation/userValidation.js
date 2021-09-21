const { Joi } = require('express-validation')

const loginPasswordSchema = {
    body: Joi.object({
        login: Joi.string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required(),
        password: Joi.string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required()
    })
}

const byUserIdSchema = {
    params: Joi.object({
        id: Joi.number().required()
    })
}


module.exports = {
    loginPasswordSchema,
    byUserIdSchema
}