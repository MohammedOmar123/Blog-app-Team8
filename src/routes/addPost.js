const router = require('express').Router();

const verifyToken=require('../middlewares/verifyToken')

const { createPost } = require('../controllers');

router.post('/post', verifyToken, createPost);

module.exports = router;
