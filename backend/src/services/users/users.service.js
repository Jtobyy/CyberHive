//this file contains the user service functions
const User = require("./../../models/User.model");

async function getUserByEmail(email) {
  //this function returns a user by email
  try {
    //find the user by email from the database
    await User.findOne({ email: email }, (err, user) => {
      if (err) {
        throw err;
      }
      return user;
    });
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  //this function returns a user by id
  try {
    //find the user by id from the database
    await User.findById(id, (err, user) => {
      if (err) {
        throw err;
      }
      return user;
    });
  } catch (error) {
    throw error;
  }
}

async function createUser(user) {
  //this function creates a user
  try {
    //create a new user
    await User.create(user, (err, user) => {
      if (err) {
        throw err;
      }
      return user;
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
};
