const { getPostsQuery } = require('../../database/queries');

const getPosts = (req, res) => {
  getPostsQuery()
    .then((posts) => {
      console.log(posts.rows);
      res.json(posts.rows);
    })
    .catch(() => {
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = getPosts;
