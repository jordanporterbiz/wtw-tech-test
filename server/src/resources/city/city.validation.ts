import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().required(),
    country: Joi.string().required(),
    population: Joi.number().required()
});

export default { create };