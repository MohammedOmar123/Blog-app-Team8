const connection = require('../../config/connection');

const getUserPostsQuery = (id) => connection.query('select * from posts where userId=$1', [id]);

module.exports = getUserPostsQuery;
