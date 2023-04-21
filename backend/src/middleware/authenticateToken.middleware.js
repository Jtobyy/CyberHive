// this middleware is used to authenticate the jwt token
const jwt = require("jsonwebtoken");
const authConfig = require("../configs/index").authConfig;

const authenticateToken = function (req, res, next) {
  // Get token from header
  const authHeader = req.header("Authorization");

  const token = authHeader && authHeader.split(" ")[1];

  console.log("token: "+ jwt.verify(token, authConfig.jwtSecret))

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, authConfig.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authenticateToken;