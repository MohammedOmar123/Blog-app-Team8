const connection = require('../../config/connection');

const checkUserQuery = (email) => connection.query('select * from posts where user =$1', [email]);

module.exports = checkUserQuery;
