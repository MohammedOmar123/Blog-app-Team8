const { addUserQuery, checkUserQuery, loginQuery } = require('./users');
const { getPostsQuery, createPostQuery, getUserPostsQuery, deletePostById } = require('./posts');
// const { createPostQuery } = require('./posts');

module.exports = {
  addUserQuery, checkUserQuery, loginQuery, getPostsQuery, createPostQuery, getUserPostsQuery, deletePostById
};
