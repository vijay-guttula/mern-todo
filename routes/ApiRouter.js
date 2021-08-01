const express = require('express');
const apiRouter = express.Router();

apiRouter.post('/auth/signup', (req, res) => {
  const { email, password } = req.body;
  res.send({ email, password });
});

module.exports = apiRouter;
