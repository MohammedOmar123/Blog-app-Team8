const logout = (req, res) => {
  res.clearCookie('token').json({ path: 'index.html' });
};
module.exports = logout;
