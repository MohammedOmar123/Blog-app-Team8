const router = require('express').Router();

const { addUserImage } = require('../controllers');

router.post('/userImage', addUserImage);

module.exports = router;
