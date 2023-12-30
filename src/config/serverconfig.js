
const bcrypt = require('bcrypt');
module.exports = {
    SALT:bcrypt.genSaltSync(9),
    JWT_KEY:process.env.JWT_KEY,
}