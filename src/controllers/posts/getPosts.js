const { getPostsQuery } = require('../../database/queries');

const getPosts = (req, res) => {
  getPostsQuery()
    .then((posts) => {
      res.json(posts.rows);
    })
    .catch((err) => {
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = getPosts;
