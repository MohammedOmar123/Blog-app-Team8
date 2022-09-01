const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/home', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.secret, (err, decoded) => {
    if (err) { res.json({ logged: false }); } else {
      req.token = decoded;
      res.json({ logged: true });
    }
  });
});

module.exports = router;
