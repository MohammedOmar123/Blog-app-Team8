const router = require('express').Router();

const { postUser, getPosts } = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');

const login = require('./login');

const addPost = require('./addPost');


// router.get('/home', verifyToken, (req, res) => {
//     res.send(req.token);
//   });

  router.use(addPost);

router.post('/signup', postUser);
router.get('/posts', getPosts);

router.use(login);

module.exports = router;
