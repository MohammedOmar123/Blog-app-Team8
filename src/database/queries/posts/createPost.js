const connection = require('../../config/connection');

const createPostQuery = ({ title, content, image }, userId) => connection.query('INSERT INTO posts(title, content, image, userid) VALUES ($1,$2,$3,$4) RETURNING *', [title, content, image, userId]);

module.exports = createPostQuery;
