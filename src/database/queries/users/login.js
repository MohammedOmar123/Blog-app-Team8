const connection = require('../../config/connection');

const loginQuery = (email) => connection.query('select * from users where email=$1 ;', [email]);

module.exports = loginQuery;
