const { getPosts } = require('./posts');
const { postUser, login, profile } = require('./users');
const { createPost } = require('./posts');

module.exports = {
  postUser, login, profile, createPost, getPosts,
};
