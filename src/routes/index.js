const router = require('express').Router();

const { postUser, getPosts } = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');

const login = require('./login');

// router.get('/home', verifyToken, (req, res) => {
//   res.send(req.token);
// });
router.post('/signup', postUser);
router.get('/posts', getPosts);

router.use(login);

module.exports = router;
