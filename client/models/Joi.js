import Joi from 'joi';

export const teamSchema = Joi.object({
  name: Joi.string().required(),
  coach: Joi.string().required(),
  players: Joi.array().items(Joi.string()).required(), // Assuming player IDs are strings
});