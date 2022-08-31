const { addUserQuery, checkUserQuery, loginQuery } = require('./users');
const { getPostsQuery, createPostQuery, getUserPostsQuery } = require('./posts');
// const { createPostQuery } = require('./posts');

module.exports = {
  addUserQuery, checkUserQuery, loginQuery, getPostsQuery, createPostQuery, getUserPostsQuery
};
