//this file is used to handle the user related requests
const { getUserById } = require("../services/users/users.service");

const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.user.id);

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }
    
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getUser,
};
