require('dotenv').config();
const express = require('express');
const apiRouter = express.Router();
const User = require('../models/UsersModel');
const Todos = require('../models/TodosModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.secret;

// user login
apiRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  console.log(findUser);
  if (findUser) {
    const checkPassword = await bcrypt.compareSync(password, findUser.password);
    if (checkPassword) {
      var token = jwt.sign({ id: findUser._id }, secret, {
        expiresIn: 86400,
      });
      res.status(200).json({
        message: 'User login successfull',
        data: findUser,
        accessToken: token,
      });
      return;
    }
    res.status(500).json({
      for: 'password',
      message: 'Wrong password entered',
    });
    return;
  }
  res.status(501).send({
    for: 'email',
    message:
      "'No user with the entered email is present, please create your account'",
  });
});

// user sign up
apiRouter.post('/auth/signup', async (req, res) => {
  const { fullName, phoneNumber, username, email, password } = req.body;
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
  const user = await User.create({
    fullName,
    phoneNumber,
    username,
    email,
    password: secretPassword,
  });
  console.log(user);
  const userTodos = await Todos.create({
    userId: user._id,
  });
  console.log(userTodos);
  var token = jwt.sign({ id: user._id }, secret, {
    expiresIn: 86400,
  });
  res.status(201).json({
    message: 'User Created Successfully',
    data: user,
    todos: userTodos,
    accessToken: token,
  });
});

apiRouter.get('/todos', async (req, res) => {
  console.log(req.headers['x-access-token']);
  let token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided!' });
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    // console.log(decoded)
    req.userId = decoded.id;
  });

  let todos = await Todos.findOne({ userId: req.userId });

  res.status(200).json({
    message: 'success',
    todos,
    accessToken: token,
  });
});

apiRouter.post('/todos', async (req, res) => {
  let token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided!' });
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    // console.log(decoded)
    req.userId = decoded.id;
  });

  console.log(req.body);
  const todosUser = await Todos.findOne({
    userId: req.userId,
  });
  todosUser.todos = req.body.todos;
  await todosUser.save();

  res.status(200).json({
    message: 'success',
    todos: todosUser,
    accessToken: token,
  });
});

module.exports = apiRouter;
