const { addUserQuery, checkUserQuery, loginQuery } = require('./users');
const { getPostsQuery } = require('./posts');
const { createPostQuery } = require('./posts');

module.exports = {
  addUserQuery, checkUserQuery, loginQuery, getPostsQuery,createPostQuery
};

