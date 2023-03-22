import Joi from 'joi';

const create = Joi.object({
    city_id: Joi.number().required(),
    temp: Joi.number().required(),
    date: Joi.date().required()
});

export default { create };