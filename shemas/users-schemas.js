import Joi from "joi";

const userSignupSchema = Joi.object({
  email: Joi.string()
    .required()
    .email()
    .messages({ "any.required": `missing required email field` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `missing required password field` }),
});

export default {
  userSignupSchema,
};
