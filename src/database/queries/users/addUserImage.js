const connection = require('../../config/connection');

const addUserImageQuery = (userImage, id) => connection.query('Update users set image = $1 where id = $2 ', [userImage, id]);

module.exports = addUserImageQuery;
