const {
  addUserQuery, checkUserQuery, loginQuery, addUserImageQuery,
} = require('./users');
const {
  getPostsQuery, createPostQuery, getUserPostsQuery, deletePostById,
} = require('./posts');

module.exports = {
  addUserQuery,
  checkUserQuery,
  loginQuery,
  getPostsQuery,
  createPostQuery,
  getUserPostsQuery,
  deletePostById,
  addUserImageQuery,
};
