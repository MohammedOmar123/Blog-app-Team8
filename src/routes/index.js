const router = require('express').Router();

const { postUser } = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');

const login = require('./login');

const addPost = require('./addPost');


// router.get('/home', verifyToken, (req, res) => {
//     res.send(req.token);
//   });

  router.use(addPost);

router.post('/signup', postUser);

router.use(login);

module.exports = router;
