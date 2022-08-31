const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
const { getUserPosts } = require('../controllers/posts');

router.get('/userPosts', verifyToken, getUserPosts);

module.exports = router;
