const User = require('../models/user');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  // Logic to register the user
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Logic to log in the user
};

module.exports = { registerUser, loginUser };
