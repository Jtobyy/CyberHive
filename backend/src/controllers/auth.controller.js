//this is the authentification controller
const {
  getUserByEmail,
  createUser,
} = require("../services/users/users.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../configs/index").authConfig;

const authenticateUser = async (req, res) => {
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
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      authConfig.jwtSecret,
      { expiresIn: "1d" },
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

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await getUserByEmail(email);

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await createUser({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const payload = {
      user: {
        id: newUser._id,
      },
    };

    jwt.sign(
      payload,
      authConfig.jwtSecret,
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  authenticateUser,
  registerUser,
};
