const connection = require('../../config/connection');

const deletePostById = (id) => connection.query(`DELETE FROM posts WHERE id = ${id};`);

module.exports = deletePostById;
