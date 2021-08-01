const express = require('express');
const apiRouter = express.Router();
const User = require('../models/UsersModel');

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

  // adding the user to the database
  const user = await User.create({ email, password });
  res.status(201).json({
    message: 'User Created Successfully',
    data: user,
  });
});

module.exports = apiRouter;
