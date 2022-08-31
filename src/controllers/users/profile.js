const getUserPosts = require('../../database/queries');
const getPosts = (req, res) => {
console.log(req.token);
res.send('he')
};
module.exports = getPosts;
