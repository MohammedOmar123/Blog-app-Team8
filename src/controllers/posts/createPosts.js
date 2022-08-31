const { createPostQuery } = require('../../database/queries');

const createPost = (req,) => {
  createPostQuery(req.body, req.token.id);
};

module.exports = createPost;
