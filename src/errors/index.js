const path = require('path');

const userError = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

const serverError = (err, req, res, next) => {
  console.log(err)
  res.status(500).json({msg: err});
};

module.exports = {
  userError,
  serverError,
};
