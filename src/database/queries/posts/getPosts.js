const connection = require('../../config/connection');

const getPostsQuery = () => connection
  .query('SELECT posts.id, posts.title, posts.content , posts.image, posts.dateTime, users.username FROM users JOIN posts ON posts.userId =users.id');

module.exports = getPostsQuery;
