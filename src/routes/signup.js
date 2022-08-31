const router = require('express').Router();

const { postUser } = require('../controllers');

router.post('/signup', postUser);

module.exports = router;
