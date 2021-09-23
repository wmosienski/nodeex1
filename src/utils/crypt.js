const jwt = require('jsonwebtoken')
const { getConfig } = require('./config');


const config = getConfig();

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