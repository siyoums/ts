const joi = require('joi');

// validate reg form
const regAuthSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  firstName: joi.string().min(2).max(30).required(),
  lastName: joi.string().min(2).max(30).required(),
  email: joi.string().email().lowercase().required(),
  password: joi.string().min(6).required(),
  role: joi.string().valid('admin', 'user', 'staff').required()
});

// validate login form
const loginAuthSchema = joi.object({
  username: joi.string().lowercase().required(),
  password: joi.string().required(),
});

// validation error handler
const handleErrors =
    (err) => {
      if (err.message.includes(`"confirmPassword" must be [ref:password]`)) {
        return 'Passwords do not match';
      }
      return err.message.replace(/['"]+/g, '');
    }


             module.exports = {
      loginAuthSchema,
      regAuthSchema,
      handleErrors
    };