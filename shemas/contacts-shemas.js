import Joi from "joi";

const contactAddShema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `missing required name field` }),
  email: Joi.string()
    .required()
    .messages({ "any.required": `missing required email field` }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": `missing required phone field` }),
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": `missing required favorite field` }),
});

const contactUpdateFavoriteSchem = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": `"missing field favorite"` }),
});

export default {
  contactAddShema,
  contactUpdateFavoriteSchem,
};
