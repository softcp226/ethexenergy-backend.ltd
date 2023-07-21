const Joi = require("joi");
const validate_admin_dashboard = (req) => {
  const schema = Joi.object({
    admin: Joi.string().required().max(1000),
    username: Joi.string().allow("").max(1000),
    password: Joi.string().allow("").max(1000),
    email: Joi.string().allow("").max(1000),
    admin_area_charset: Joi.string().allow("").max(1000),
    show_google_translator: Joi.string().allow("").max(1000),
  });
  const result = schema.validate({
    admin: req.admin,
    username: req.username,
    password: req.password,
    email: req.email,
    admin_area_charset: req.admin_area_charset,
    show_google_translator: req.show_google_translator,
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_admin_dashboard;
