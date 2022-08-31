const { date } = require('joi');
const { createPostQuery } = require('../../database/queries');

const createPost = (req, res) => {
// createPostQuery()
  console.log('tokennnnnnnnnnnnnnnn', req.token.id);
  createPostQuery(req.body, req.token.id).then((date) => {
    console.log('********************', date);
  });
};

module.exports = createPost;
