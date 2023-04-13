//this is the authentification controller
const {
  getUserByEmail,
  createUser,
} = require("../services/users/users.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../configs/index").authConfig;

const authenticateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      authConfig.jwtSecret,
      { expiresIn: authConfig.jwtExpiration },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};


const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await getUserByEmail(email);
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = await createUser(name, email, password);
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      authConfig.jwtSecret,
      { expiresIn: authConfig.jwtExpiration },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  authenticateUser,
  registerUser,
};
