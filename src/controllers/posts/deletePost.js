const { deletePostById } = require('../../database/queries/index');

const deletePost = (req, res) => {
  console.log(req.params.id, 'in req.param');
  const postId = req.params.id;
  deletePostById(postId).then(res.redirect('/userPosts')).catch((erorr) => console.log(erorr));
};

module.exports = deletePost;
