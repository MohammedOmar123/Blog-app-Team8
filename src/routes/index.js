const router = require('express').Router();

const signup = require('./signup');
const login = require('./login');
const addPost = require('./addPost');
const getUserPosts = require('./getUserPosts');
const getPosts = require('./getPosts');

router.use(addPost);

router.use(signup);

router.use(getPosts);

router.use(login);
router.use(getUserPosts);

module.exports = router;
