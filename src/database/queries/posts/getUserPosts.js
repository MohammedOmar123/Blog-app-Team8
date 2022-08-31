const connection = require('../../config/connection');

const getUserPostsQuery = (id) => connection.query('select * from posts where id=$1', [id]);

module.exports = getUserPostsQuery;
