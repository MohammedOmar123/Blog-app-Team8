const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
const { getPosts } = require('../controllers/posts');

router.get('/userPosts', verifyToken, getPosts);

module.exports = router;
