const { join } = require('path');
const Joi = require('joi');

const jwt = require('jsonwebtoken');
require('env2')('.env');
const bcrypt = require('bcryptjs');

const { loginQuery } = require('../../database/queries');

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  const validationInputs = () => {
    const schema = Joi.object({
      email: Joi.string().email().required,
      password: Joi.string().required(),
    });
    const result = schema.validate({ email, password });
    return result;
  };

  if (!(validationInputs(email, password))) {
    res.json({ result: 'Invalid Inputs !' });
  }
  loginQuery(email).then((data) => {
    if (data.rowCount === 1) {
      bcrypt.compare(password, data.rows[0].password).then((result) => {
        if (result) {
          jwt.sign({ email: data.rows[0].email, id: data.rows[0].id }, process.env.secret, {
            algorithm: 'HS256',
            expiresIn: '1h',
          }, (err, Signature) => {
            if (err) {
              res.status(500).sendFile(join(__dirname, '..', '..', '..','public', '500.html'));
            } else {
              res.cookie('token', Signature, { httpOnly: true, secure: true, maxAge: 3600000 }).json({ path: 'home.html' });
            }
          });
        } else {
          res.json({ result: 'Username or Password are not correct ' });
        }
      }).catch(() => res.status(500).sendFile(join(__dirname, '..', '..', 'public', '500.html')));
    } else {
      res.json({ result: 'Username or Password are not correct ' });
    }
  });
};

module.exports = login;
