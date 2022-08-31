const getUserPosts = (req, res) => {
  console.log(req.token);
  res.send('he');
};
module.exports = getUserPosts;
