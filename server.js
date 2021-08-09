require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/ApiRouter');
const mongoose = require('mongoose');
const path = require('path');

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
mongoose.connect(
  process.env.DB_CONNECTIONSTRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log('Database Connected');
  }
);

// for prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`I love you ${PORT}`);
});
