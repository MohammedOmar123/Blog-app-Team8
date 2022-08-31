const router = require('express').Router();

const { profile } = require('../controllers');

router.get('/profile', verifyToken(req, res), profile);

module.exports = router;
