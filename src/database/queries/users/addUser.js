const bcrypt = require('bcryptjs');

const connection = require('../../config/connection');

const addUserQuery = ({
  email, username, password,
}) => connection.query('INSERT INTO users(email, username, password) VALUES ($1,$2,$3) RETURNING  *', [email, username, bcrypt.hashSync(password, 10)])
  .then((data) => data.rows[0]).then((row) => row);
module.exports = addUserQuery;
