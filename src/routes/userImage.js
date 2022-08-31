const router = require('express').Router();

const { addUserImage } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

router.post('/userImage', verifyToken, addUserImage);

module.exports = router;
