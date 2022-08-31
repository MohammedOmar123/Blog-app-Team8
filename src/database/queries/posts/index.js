const getPostsQuery = require('./getPosts');
const createPostQuery = require('./createPost');
const getUserPostsQuery = require('./getUserPosts');
const deletePostById = require('./deletePostById');

module.exports = {
  getPostsQuery, createPostQuery, getUserPostsQuery, deletePostById,
};
