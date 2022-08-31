const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
const { getUserPosts, deletePost } = require('../controllers/posts');

router.get('/userPosts', verifyToken, getUserPosts).delete('/userPosts/delete-post/:id', deletePost);

module.exports = router;
