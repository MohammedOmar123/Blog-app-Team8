const connection = require('../../config/connection');

const getUserPostsQuery = (id) => connection.query(`select users.username,users.email, users.image as userImage,
posts.id,posts.title, posts.content, posts.image, posts.datetime from users join posts on users.id = posts.userId where users.id = $1  `, [id]);
module.exports = getUserPostsQuery;
