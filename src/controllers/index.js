const { postUser, login } = require('./users');
const { createPost, getUserPosts, getPosts } = require('./posts');

module.exports = {
  postUser, login, createPost, getPosts, getUserPosts,
};
