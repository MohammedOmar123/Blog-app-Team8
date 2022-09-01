const router = require('express').Router();

const { logout } = require('../controllers');

router.post('/logout', logout);

module.exports = router;
