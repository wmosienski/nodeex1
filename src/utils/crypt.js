const jwt = require('jsonwebtoken')
const config = require("./config");


const generateToken = payload => jwt.sign(
    payload,
    config.API_SECRET,
);

const generateTimeLimitedToken = payload => jwt.sign(
  payload,
  config.API_SECRET,
  {expiresIn: config.REFRESH_SESSION_TIME}
);


module.exports = { 
  generateToken,
  generateTimeLimitedToken
}