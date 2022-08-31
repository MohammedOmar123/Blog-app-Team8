const path = require('path');

const userError = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '400.html'));
};

const serverError = (err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
};

module.exports = {
  userError,
  serverError,
};
