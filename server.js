require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/ApiRouter');

// initialising
const app = express();

// cors
app.use(cors());

// morgan
app.use(morgan('dev'));

// backend routing link
app.use('/api/v1/to-do', apiRouter);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`I love you ${PORT}`);
});
