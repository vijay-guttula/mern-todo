require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/ApiRouter');
const mongoose = require('mongoose');

// initialising
const app = express();

// cors
app.use(cors());

// morgan
app.use(morgan('dev'));

// body parsing
app.use(express.json());

// backend routing link
app.use('/api/v1/to-do', apiRouter);

// mongodb init
mongoose.connect(process.env.DB_CONNECTIONSTRING, () => {
  console.log('Database Connected');
});

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`I love you ${PORT}`);
});
