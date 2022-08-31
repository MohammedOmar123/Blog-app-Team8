const { join } = require('path');

const jwt = require('jsonwebtoken');
require('env2')('.env');
const bcrypt = require('bcryptjs');

const { loginQuery } = require('../../database/queries');

const login = (req, res) => {
  const { email, password } = req.body;
  loginQuery(email).then((data) => {
    if (data.rowCount === 1) {
        console.log(data);
      bcrypt.compare(password, data.rows[0].password).then((result) => {
        if (result) {
          jwt.sign({ email: data.email, id: data.id }, process.env.secret, {
            algorithm: 'HS256',
            expiresIn: '1h',
          }, (err, Signature) => {
            if (err) {
              res.status(500).sendFile(join(__dirname, '..', '..', 'public', '500.html'));
            } else {
              res.cookie('user', Signature, { httpOnly: true, secure: true, maxAge: 3600000 }).json({ path: 'post.html' });
            }
          });
        }
      });
    }
  });
};

module.exports = login;
