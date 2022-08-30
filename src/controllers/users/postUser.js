/* eslint-disable no-console */
/* eslint-disable max-len */
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { addUserQuery, checkUserQuery } = require('../../database/queries');

const schema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().alphanum().min(6).required(),
  password2: Joi.valid(Joi.ref('password')),
});
const postUser = (req, res) => {
  schema.validateAsync(req.body, { abortEarly: false })
    .then((data) => {
      checkUserQuery(data.email).then((users) => {
        if (users.rows.length) {
          res.json({ msg: 'This email is already exists' });
        } else {
          // console.log(process.env.SECRET_KEY);
          // const { email, username, password } = req.body;
          // bcrypt.hash(password, 10, (err, hash) => {
          //   if (err) { console.log(error); } else { addUserQuery(req.body); }
          // });
          addUserQuery(req.body);
          jwt.sign({ id: 5 }, process.env.SECRET_KEY, { algorithm: 'HS256' }, (err, token) => {
            res
              .cookie('token', token, {
                httpOnly: true,
                secure: true,
              }).redirect('/home');
          });
        }
      });
    }).catch((error) => res.status(500).json(error.details));
};
module.exports = postUser;
