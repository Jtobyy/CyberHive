//this file is used to handle the user related requests
const { getUserById } = require("../services/users/users.service");

const getUser = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getUser,
};
