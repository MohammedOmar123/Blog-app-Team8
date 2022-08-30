const router = require('express').Router();
const { postUser } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

// router.get('/home', verifyToken, (req, res) => {
//   res.send(req.token);
// });
router.post('/signup', postUser);
module.exports = router;
