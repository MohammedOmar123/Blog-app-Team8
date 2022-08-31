const { getUserPostsQuery } = require('../../database/queries');

const getUserPosts = (req, res) => {
  const { id } = req.token;
  getUserPostsQuery(id).then((result) => res.json(result));
};
module.exports = getUserPosts;
