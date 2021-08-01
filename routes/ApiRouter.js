const express = require('express');
const apiRouter = express.Router();

apiRouter.post('/auth/signup', (req, res) => {
  res.send('Post req received');
});

module.exports = apiRouter;
