// this file is used to set configure object

const authConfig = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
};

module.exports = authConfig;
