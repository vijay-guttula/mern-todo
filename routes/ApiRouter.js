const express = require('express');
const apiRouter = express.Router();
const User = require('../models/UsersModel');
const bcrypt = require('bcrypt');

// user login
apiRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  console.log(findUser);
  if (findUser) {
    const checkPassword = await bcrypt.compareSync(password, findUser.password);
    if (checkPassword) {
      res.status(200).json({
        message: 'User login successfull',
        data: findUser,
      });
      return;
    }
    res.status(500).json({
      for: 'password',
      message: 'Wrong password entered',
    });
    return;
  }
  res.status(501).json({
    for: 'email',
    message:
      'No user with the entered email is present, please create your account',
  });
});

// user sign up
apiRouter.post('/auth/signup', async (req, res) => {
  const { email, password } = req.body;
  // const user = await new User({ email, password });
  // await user.save();
  // check email duplication
  const checkDuplicate = await User.findOne({ email });
  if (checkDuplicate) {
    res.status(500).json({
      message: 'User Already exists with the email',
    });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const secretPassword = await bcrypt.hash(password, salt);

  // adding the user to the database
  const user = await User.create({ email, password: secretPassword });
  res.status(201).json({
    message: 'User Created Successfully',
    data: user,
  });
});

module.exports = apiRouter;
