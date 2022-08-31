const router = require('express').Router();

const { postUser } = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');

const login = require('./login');

const posts = require('./posts');

// router.get('/home', verifyToken, (req, res) => {
//   res.send(req.token);
// });
router.post('/signup', postUser);

router.use(login);
router.use(posts);

module.exports = router;
