const router = require('express').Router();

const { posts } = require('../controllers');

router.get('/posts', posts);

module.exports = router;
