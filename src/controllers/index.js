const { postUser, login, addUserImage } = require('./users');
const {
  createPost, getUserPosts, getPosts, deletePost,
} = require('./posts');

module.exports = {
  postUser, login, createPost, getPosts, getUserPosts, deletePost, addUserImage,
};
