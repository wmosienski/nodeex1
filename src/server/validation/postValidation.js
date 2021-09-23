const { Joi } = require('express-validation')
Joi.objectId = require('joi-objectid')(Joi)

const newPostSchema = {
    body: Joi.object({
        userId: Joi.number()
            .required(),
        content: Joi.string()
            .regex(/[a-zA-Z0-9]{3,300}/)
            .required()
    })
}

const newCommentSchema = {
    body: Joi.object({
        userId: Joi.number()
            .required(),
        path: Joi.array()
            .required(),
        content: Joi.string()
            .regex(/[a-zA-Z0-9]{3,300}/)
            .required()
    })
}


module.exports = {
    newPostSchema,
    newCommentSchema
}