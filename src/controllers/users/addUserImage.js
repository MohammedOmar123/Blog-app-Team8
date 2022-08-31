const { addUserImageQuery } = require('../../database/queries');

const addUserImage = (req) => {
  const imageURL = req.body.image;
  const { id } = req.token;
  addUserImageQuery(imageURL, id).then((data) => console.log(data.rows));
};
module.exports = addUserImage;
