const bcrypt = require('bcryptjs');

const connection = require('../../config/connection');

const addUserQuery = ({
  email, username, password,
}) => {
  connection.query('INSERT INTO users(email, username, password) VALUES ($1,$2,$3)', [email, username, bcrypt.hashSync(password, 10)]);
};
module.exports = addUserQuery;
