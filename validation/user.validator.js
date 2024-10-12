const Joi = require('joi');

const {possibleGender} = require('../config/config')

const searchUserValidation = Joi.object({
    age: Joi.number().min(1).max(100),
    gender: Joi.string().valid(...possibleGender)
})

module.exports = { searchUserValidation };