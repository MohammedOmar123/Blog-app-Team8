const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  console.log('token');
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) { res.status(300).json({ massage: 'signup.html' }); } else {
      req.token = decoded;
      next();
    }
  });
};

module.exports = verifyToken;
