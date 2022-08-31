const { date } = require('joi');
const { createPostQuery } = require('../../database/queries');

const createPost = (req,res) => {
  createPostQuery(req.body, req.token.id).then((data)=> res.send(data.rows[0]));
};

module.exports = createPost;
